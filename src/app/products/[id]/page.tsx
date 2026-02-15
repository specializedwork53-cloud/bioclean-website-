import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ui/product-detail";

// This is a server component that generates metadata and fetches data
export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const product = products.find((p) => p.id === resolvedParams.id);

    if (!product) {
        notFound();
    }

    return <ProductDetail product={product} />;
}
