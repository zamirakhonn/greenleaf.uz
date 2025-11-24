import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  stock: number;
}

interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product?: Product;
}

const ProductsSection = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6); // initially show 6 products

  // Sample Uzbek products
  const sampleProducts: Product[] = [
    {
      id: "1",
      name: "Carich yaltiratuvchi va oqartiruvchi tana losyoni",
      description: "Tana terisini yengil oqartirishga, tusini bir tekislashtirishga yordam beradi. Losyonning namlovchi xususiyatlari quruqlikni yo‘qotib, terini yanada yumshoq va mayin qiladi. Hajmi: 200 ml",
      price: 25.99,
      image_url: "src/assets/(2).png",
      category: "Tana parvarishi",
      stock: 30,
    },
    {
      id: "2",
      name: "SEALUXE kollagenli serum",
      description: "Tarkibida gidrolizlangan kollagen va biotin mavjud bo‘lib, ular niatsinamid bilan birgalikda terining tarangligi va elastikligini oshiradi.",
      price: 19.99,
      image_url: "src/assets/(3).png",
      category: "Yuz parvarishi",
      stock: 25,
    },
    {
      id: "3",
      name: "CARICH zanjabilli namlovchi oyoq kremi",
      description: "Zanjabil tarkibida 400 dan ortiq biologik faol moddalar mavjud. Retinol terini silliq va jiloli qiladi, qurish hissini bartaraf etadi. Tsitral antiseptik ta’sir ko‘rsatib, yallig‘lanishdan himoya qiladi. B guruhi vitaminlari, kaltsiy va kremniy terini mustahkamlab, uni yanada tarang va tekis bo'lishini ta'minlaydi",
      price: 15.49,
      image_url: "src/assets/(4).png",
      category: "Tana parvarishi",
      stock: 40,
    },
    {
      id: "2",
      name: "iLife Yashil Choy Ko‘pik",
      description: "Kosmetika qoldiqlari teriga katta zarar yetkazishi mumkin. Bir marta makiyaj tozalanmasa, teri metabolizmining tiklanishi uchun uch hafta vaqt talab etiladi. Har kuni terini samarali tozalash uchun ushbu yumshoq ko'pikdan foydalaning. Barcha turdagi teri uchun mos.",
      price: 19.99,
      image_url: "src/assets/(5).png",
      category: "Yuz parvarishi",
      stock: 25,
    },
    {
      id: "3",
      name: "iLife tiklovchi aloe geli",
      description: "Aloe Vera terida himoya qatlami hosil qilib, namlikni to‘ldirishga yordam beradi. Terni tinchlantiradi, yallig‘lanish, qizarish va qichishishni kamaytiradi, shuningdek terining tezroq tiklanishiga ko‘maklashadi. ",
      price: 15.49,
      image_url: "src/assets/(6).png",
      category: "Soch parvarishi",
      stock: 40,
    },
    {
      id: "2",
      name: "iLiFE protein va asal qo‘shilgan yuz kremi",
      description: "Tarkibida kuchli antioksidant — superoksiddismutaza (SOD) mavjud bo‘lib, erkin radikallarga qarshi kurashadi va teri salomatligini qo‘llab-quvvatlaydi. Shuningdek, jenshen ildizidan olingan gidrolizlangan kollagen terini tiklash va yoshligini saqlashga yordam beradi.",
      price: 19.99,
      image_url: "src/assets/(7).png",
      category: "Yuz parvarishi",
      stock: 25,
    }
   

    

    
  ];

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase.from("products").select("*");
      if (error) throw error;
      setProducts(data && data.length ? (data as Product[]) : sampleProducts);
    } catch (err) {
      console.error(err);
      toast({ title: "Error loading products", variant: "destructive" });
      setProducts(sampleProducts);
    }
  };

  // Fetch cart with product info
  const fetchCart = async () => {
    try {
      const { data, error } = await supabase
        .from("cart_items")
        .select("*, product:products(*)");
      if (error) throw error;
      setCartItems(data || []);
    } catch (err) {
      console.error(err);
    }
  };

  

  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Eko Mahsulotlar</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Barqaror va ekologik toza mahsulotlarimiz bilan tanishing. Har biri siz va tabiat uchun xavfsiz va sifatli tanlovdir.
          </p>
        </div>

        {/* Cart Toggle */}
        <div className="flex justify-end mb-8">
          <Button onClick={() => setShowCart(!showCart)} variant="outline" className="relative">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Cart ({cartItems.length})
          </Button>
        </div>

        {/* Shopping Cart */}
        {showCart && (
          <Card className="mb-12 animate-scale-in">
            <CardHeader><CardTitle>Shopping Cart</CardTitle></CardHeader>
            <CardContent>
              {!cartItems.length ? (
                <p className="text-center text-muted-foreground py-8">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img src={item.product?.image_url} alt={item.product?.name} className="w-20 h-20 object-contain rounded" />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.product?.name}</h4>
                        <p className="text-sm text-muted-foreground">${item.product?.price} each</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <Button size="sm" variant="outline" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="font-semibold">${((item.product?.price || 0) * item.quantity).toFixed(2)}</div>
                      <Button size="sm" variant="destructive" onClick={() => removeFromCart(item.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-xl font-bold">Total:</span>
                    <span className="text-2xl font-bold text-primary">${getTotalAmount()}</span>
                  </div>
                  <Button onClick={proceedToPayment} className="w-full mt-2" size="lg">
                    Proceed to Payment
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, visibleCount).map((product, index) => (
            <Card key={product.id} className="hover:[box-shadow:var(--shadow-hover)] transition-all duration-300 hover:-translate-y-2 animate-scale-in">
              <CardHeader className="p-0 flex justify-center items-center bg-gray-100">
                <img src={product.image_url} alt={product.name} className="w-full h-64 object-contain rounded-t-lg" />
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">{product.category}</span>
                </div>
                <CardTitle className="mb-2">{product.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <span className="text-sm text-muted-foreground">Stock: {product.stock}</span>
                </div>
              </CardContent>
              <CardFooter>
           
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < products.length && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300 w-full max-w-xs text-center"
              style={{ boxShadow: "0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00" }}
            >
              Load More Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
