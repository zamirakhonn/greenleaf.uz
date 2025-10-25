-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT,
  category TEXT,
  stock INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create cart items table
CREATE TABLE public.cart_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id UUID NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  quantity INTEGER NOT NULL DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

-- Products are viewable by everyone
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Anyone can insert products (for demo purposes)
CREATE POLICY "Anyone can create products" 
ON public.products 
FOR INSERT 
WITH CHECK (true);

-- Anyone can update products (for demo purposes)
CREATE POLICY "Anyone can update products" 
ON public.products 
FOR UPDATE 
USING (true);

-- Anyone can delete products (for demo purposes)
CREATE POLICY "Anyone can delete products" 
ON public.products 
FOR DELETE 
USING (true);

-- Cart items are viewable by everyone (for demo)
CREATE POLICY "Cart items are viewable by everyone" 
ON public.cart_items 
FOR SELECT 
USING (true);

-- Anyone can insert cart items
CREATE POLICY "Anyone can create cart items" 
ON public.cart_items 
FOR INSERT 
WITH CHECK (true);

-- Anyone can update cart items
CREATE POLICY "Anyone can update cart items" 
ON public.cart_items 
FOR UPDATE 
USING (true);

-- Anyone can delete cart items
CREATE POLICY "Anyone can delete cart items" 
ON public.cart_items 
FOR DELETE 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products
INSERT INTO public.products (name, description, price, category, stock, image_url) VALUES
('Eco Journal - Forest', 'Premium recycled paper journal with forest theme', 24.99, 'Journals', 50, 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500'),
('Eco Journal - Ocean', 'Beautiful ocean-inspired eco-friendly journal', 24.99, 'Journals', 45, 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=500'),
('Bamboo Pen Set', 'Set of 5 sustainable bamboo pens', 12.99, 'Accessories', 100, 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=500'),
('Organic Cotton Tote', 'Reusable organic cotton tote bag', 15.99, 'Lifestyle', 75, 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500'),
('Natural Soap Set', 'Handmade natural soap collection', 19.99, 'Beauty', 60, 'https://images.unsplash.com/photo-1600857062241-98e5dba60f2f?w=500'),
('Recycled Notebook', 'A5 notebook made from 100% recycled materials', 9.99, 'Journals', 80, 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500');