import type { MetadataRoute } from "next";
import { posts, products } from "@/lib/site-data";
export default function sitemap():MetadataRoute.Sitemap{const base="https://sauvage-atelier.example";const pages=["","about","products","gallery","reviews","journal","faq","contact","privacy","terms"];return [...pages.map(p=>({url:base+"/"+p,lastModified:new Date("2026-10-26")})),...products.map(p=>({url:base+"/products/"+p.slug,lastModified:new Date("2026-10-26")})),...posts.map(p=>({url:base+"/journal/"+p.slug,lastModified:new Date("2026-10-26")}))]}
