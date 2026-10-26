import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
export default function NotFound(){return <SiteShell><section className="not-found"><span>404</span><p className="eyebrow">The trail ends here</p><h1>This note has<br/><em>faded away.</em></h1><p>The page you’re looking for may have moved, or perhaps it was only ever a memory.</p><Link className="btn btn-gold" href="/"><ArrowLeft size={17}/> Return home</Link></section></SiteShell>}
