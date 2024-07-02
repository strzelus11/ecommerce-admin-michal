import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function EditProductPage() {
	const [productInfo, setProductInfo] = useState(null);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		if (!id) {
			return;
		}
		axios.get("/api/products?id=" + id).then((response) => {
			setProductInfo(response.data);
		});
	}, [id]);

	return (
		<div>
            <h1>Edit Product</h1>
            {productInfo && <ProductForm {...productInfo} />}
		</div>
	);
}
