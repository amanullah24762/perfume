import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, Star } from "lucide-react";
import { SiteShell, FinalCta, ProductCard } from "@/components/site-shell";
import { products } from "@/lib/site-data";

export default function Home() {
  return <SiteShell>
    <section className="hero">
      <div className="hero-copy reveal"><p className="eyebrow">The signature collection · 2026</p><h1>A fragrance that<br/><em>lingers like a memory.</em></h1><p className="lead">Rare ingredients. Quiet confidence. Discover modern compositions made for the moments you never want to forget.</p><div className="actions"><Link className="btn btn-gold" href="/products">Explore the collection <ArrowRight size={17}/></Link><Link className="text-link" href="/about">Our story</Link></div></div>
      <div className="hero-art" role="img" aria-label="Black perfume bottle on wet obsidian stone"><div className="hero-seal"><span>SA</span><small>PARIS<br/>2026</small></div><div className="scent-note"><span>01</span><p>Bergamot<br/><b>after dark</b></p></div></div>
      <div className="hero-index">EAU DE PARFUM <span>01 — 04</span></div><div className="scroll-cue"><i/>SCROLL TO DISCOVER</div>
    </section>
    <section className="marquee" aria-label="Brand values"><span>COMPLIMENTARY SHIPPING</span><i>✦</i><span>CRAFTED IN FRANCE</span><i>✦</i><span>30-DAY RETURNS</span><i>✦</i><span>DISCOVERY SET INCLUDED</span></section>
    <section className="section intro-grid reveal"><div><p className="eyebrow">A study in contrast</p><h2>Untamed nature,<br/><em>refined by hand.</em></h2></div><div><p>We pair expressive natural materials with precise modern perfumery. Every composition develops slowly on skin—bright at first, intimate by evening, unforgettable after dark.</p><Link className="text-link" href="/about">Discover our craft <ArrowRight size={15}/></Link></div></section>
    <section className="section dark-panel"><div className="section-head"><div><p className="eyebrow">The collection</p><h2>Find your <em>signature.</em></h2></div><Link className="text-link light" href="/products">View all fragrances <ArrowRight size={15}/></Link></div><div className="product-grid">{products.slice(0,3).map((item,i)=><ProductCard key={item.slug} product={item} index={i}/>)}</div></section>
    <section className="section ritual"><div className="ritual-image"><div className="number">02</div></div><div className="ritual-copy reveal"><p className="eyebrow">The art of wearing fragrance</p><h2>Your daily ritual,<br/><em>elevated.</em></h2><p>Apply to pulse points after showering. Let the fragrance warm naturally on skin—never rub. Layer with our parfum oil to make the trail distinctly yours.</p><div className="ritual-points"><div><Sparkles/><b>Mist</b><span>From 15 cm</span></div><div><Leaf/><b>Layer</b><span>For dimension</span></div><div><Star/><b>Remember</b><span>Make it yours</span></div></div><Link className="btn btn-ink" href="/journal/the-art-of-sillage">Read the ritual <ArrowRight size={17}/></Link></div></section>
    <section className="quote-section"><p className="stars">★★★★★</p><blockquote>“Warm, magnetic, and somehow completely my own. I get asked about it every time I wear it.”</blockquote><p>— MARA L., VERIFIED CLIENT <span>Illustrative review</span></p></section>
    <FinalCta/>
  </SiteShell>
}
