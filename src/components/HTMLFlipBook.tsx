import React, {
  ReactElement,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { PageFlip } from "page-flip";
// import { IFlipSetting, IEventProps } from "./settings"; // optional

interface IFlipSetting {
  width?: number;
  height?: number;
  size?: "fixed" | "stretch";
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  maxShadowOpacity?: number;
  showCover?: boolean;
  mobileScrollSupport?: boolean;
}

interface IEventProps {
  onFlip?: (e: any) => void;
  onChangeOrientation?: (e: any) => void;
  onChangeState?: (e: any) => void;
  onInit?: (e: any) => void;
  onUpdate?: (e: any) => void;
}

interface IProps extends IFlipSetting, IEventProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  renderOnlyPageLengthChange?: boolean;
}

const HTMLFlipBookForward = React.forwardRef(
  (props: IProps, ref: React.MutableRefObject<PageFlip | null>) => {
    const htmlElementRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLElement[]>([]);
    const pageFlip = useRef<PageFlip>();
    const [pages, setPages] = useState<ReactElement[]>([]);

    useImperativeHandle(ref, () => ({
      pageFlip: () => pageFlip.current,
    }));

    const refreshOnPageDelete = useCallback(() => {
      if (pageFlip.current) {
        pageFlip.current.clear();
      }
    }, []);

    const removeHandlers = useCallback(() => {
      const flip = pageFlip.current;
      if (flip) {
        flip.off("flip");
        flip.off("changeOrientation");
        flip.off("changeState");
        flip.off("init");
        flip.off("update");
      }
    }, []);

    useEffect(() => {
      childRef.current = [];

      if (props.children) {
        const childList = React.Children.map(props.children, (child) =>
          React.cloneElement(child as ReactElement, {
            ref: (dom: HTMLElement) => {
              if (dom) childRef.current.push(dom);
            },
          })
        );

        if (
          !props.renderOnlyPageLengthChange ||
          pages.length !== childList.length
        ) {
          if (childList.length < pages.length) refreshOnPageDelete();
          setPages(childList);
        }
      }
    }, [props.children]);

    useEffect(() => {
      const setHandlers = () => {
        const flip = pageFlip.current;
        if (!flip) return;

        if (props.onFlip) flip.on("flip", (e) => props.onFlip(e));
        if (props.onChangeOrientation)
          flip.on("changeOrientation", (e) => props.onChangeOrientation(e));
        if (props.onChangeState)
          flip.on("changeState", (e) => props.onChangeState(e));
        if (props.onInit) flip.on("init", (e) => props.onInit(e));
        if (props.onUpdate) flip.on("update", (e) => props.onUpdate(e));
      };

      if (pages.length > 0 && childRef.current.length > 0) {
        removeHandlers();

        if (htmlElementRef.current && !pageFlip.current) {
          pageFlip.current = new PageFlip(htmlElementRef.current, props);
        }

        if (!pageFlip.current.getFlipController()) {
          pageFlip.current.loadFromHTML(childRef.current);
        } else {
          pageFlip.current.updateFromHtml(childRef.current);
        }

        setHandlers();
      }
    }, [pages]);

    return (
      <div ref={htmlElementRef} className={props.className} style={props.style}>
        {pages}
      </div>
    );
  }
);

export const HTMLFlipBook = React.memo(HTMLFlipBookForward);
