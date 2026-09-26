'use client';
import {Banknote,CalendarDays,Check,Contact,FileText,MapPinned,PackageCheck,Route,ShieldCheck,Truck} from 'lucide-react';
import {useActiveBrand} from './framework-shell';

const groups=[
 {icon:Route,title:'Navigation & Workflow',subtitle:'Übersichtlich. Auf allen Geräten.',items:['Navigation neu gegliedert: Operativ · Geld · Auswertung','Mobile und Desktop nutzen dieselbe Navigation','Kiste ausgeben wird zum Startpunkt einer neuen Sendung']},
 {icon:Truck,title:'Sendungen end-to-end',subtitle:'Alles im Blick. Von Anfang bis Ende.',items:['Status und nächster Schritt direkt oben auf jeder Sendung','Geld & Belege zeigt Preis, bezahlt, offen und Belege an einem Ort','Neue Sendungsnummern ab 20001, getrennt vom Alt-System']},
 {icon:PackageCheck,title:'Abholung & Rechnung',subtitle:'Schneller zum Ziel.',items:['Abholung kann direkt die Rechnung erzeugen','Anzahlungen werden automatisch berücksichtigt','Zurückgebliebene Kisten werden eigene Sendungen']},
 {icon:Contact,title:'KYC & Kontakte',subtitle:'Sicher. Vollständig. Aktuell.',items:['Ausweis erneut scannen und bestehende Kontakte prüfen','ID-Karte, Pass und Cédula unterstützt','Nationalität und Ausweisdaten direkt am Kontakt sichtbar']},
 {icon:Banknote,title:'Finanzen & Kontrolle',subtitle:'Transparenz in der ganzen App.',items:['Beträge lassen sich appweit verwischen','Revolut-Buchungen neu als Haus-Tabelle','Bank-/Buchungs-Wächter erkennt Inkonsistenzen sofort']},
 {icon:FileText,title:'Belege & Kommunikation',subtitle:'Zuverlässig. Mehrsprachig. Professionell.',items:['Rechnungen und Offerten werden wieder zuverlässig per E-Mail versendet','E-Mail-Absender Dominicano Express, Antworten ins Büro','Belege in Spanisch, Deutsch und Englisch in einem PDF']},
];

export default function ChangelogInfographic(){
 const {brand}=useActiveBrand();
 const isDominicano=brand.id==='dominicano-express';
 return <div style={{maxWidth:1040,margin:'0 auto 48px',border:'1px solid var(--border)',borderRadius:'var(--brand-radius)',overflow:'hidden',background:'var(--card)',boxShadow:'var(--brand-shadow)'}}>
   <section style={{position:'relative',padding:'42px 44px 34px',background:'linear-gradient(120deg, var(--brand-color-navy-deep, var(--primary)) 0%, var(--brand-color-navy, var(--primary)) 62%, #154b83 100%)',color:'#fff'}}>
     <div style={{display:'flex',justifyContent:'space-between',gap:24,alignItems:'flex-start',flexWrap:'wrap'}}>
       <div><div style={{fontSize:14,fontWeight:700,letterSpacing:1.8,textTransform:'uppercase'}}>Dominicano Express · Caja</div><div style={{marginTop:5,fontSize:12,letterSpacing:3,opacity:.82}}>CHANGELOG</div></div>
       <div style={{fontSize:11,letterSpacing:2.4,textTransform:'uppercase',opacity:.75,maxWidth:160,lineHeight:1.5}}>Mehr als eine Sendung. Eine Verbindung.</div>
     </div>
     <h2 style={{fontSize:'clamp(32px,5vw,56px)',lineHeight:1.02,margin:'34px 0 10px',letterSpacing:'-.035em',color:'#fff'}}>Caja — Changelog 26.09.2026</h2>
     <p style={{fontSize:20,margin:0,opacity:.88}}>Ein Tag. Ein grosser Sprung im operativen System.</p>
     <div style={{display:'flex',gap:24,flexWrap:'wrap',marginTop:28,fontSize:11,letterSpacing:1.6,textTransform:'uppercase',opacity:.8}}>
       <span>Kisten · Sendungen · Menschen</span><span>Dominikanische Republik</span><span>Effizienter · einfacher · gemeinsam weiter</span>
     </div>
   </section>

   {!isDominicano&&<div style={{margin:'24px 24px 0',padding:'12px 14px',border:'1px solid var(--border)',borderRadius:10,background:'var(--muted)',color:'var(--muted-foreground)',fontSize:13}}>Dieses Muster ist für Dominicano Express geschrieben. Wechsle oben auf die Brand «Dominicano Express», um die vorgesehene CI zu sehen.</div>}

   <section style={{padding:24,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:16,background:'var(--background)'}}>
    {groups.map(({icon:Icon,title,subtitle,items})=><article key={title} style={{padding:22,border:'1px solid var(--border)',borderRadius:'var(--brand-radius)',background:'var(--card)',minHeight:230}}>
      <div style={{display:'grid',gridTemplateColumns:'56px 1fr',gap:16,alignItems:'start'}}>
        <div style={{width:56,height:56,borderRadius:12,display:'grid',placeItems:'center',background:'var(--accent)',color:'var(--primary)'}}><Icon size={28}/></div>
        <div><h3 style={{margin:'2px 0 4px',fontSize:23,letterSpacing:'-.02em'}}>{title}</h3><p style={{margin:0,color:'var(--muted-foreground)'}}>{subtitle}</p></div>
      </div>
      <div style={{display:'grid',gap:12,marginTop:22}}>{items.map(item=><div key={item} style={{display:'grid',gridTemplateColumns:'22px 1fr',gap:10,lineHeight:1.38}}><span style={{width:20,height:20,borderRadius:999,display:'grid',placeItems:'center',background:'var(--primary)',color:'var(--primary-foreground)',marginTop:1}}><Check size={13} strokeWidth={3}/></span><span>{item}</span></div>)}</div>
    </article>)}
   </section>

   <section style={{padding:'0 24px 24px',background:'var(--background)'}}>
    <article style={{padding:22,border:'1px solid var(--border)',borderRadius:'var(--brand-radius)',background:'var(--card)'}}>
      <div style={{display:'grid',gridTemplateColumns:'56px 1fr',gap:16,alignItems:'start'}}>
       <div style={{width:56,height:56,borderRadius:12,display:'grid',placeItems:'center',background:'var(--accent)',color:'var(--primary)'}}><CalendarDays size={28}/></div>
       <div><h3 style={{margin:'2px 0 4px',fontSize:23}}>Zeit, Daten & Stabilität</h3><p style={{margin:0,color:'var(--muted-foreground)'}}>Stabiler Betrieb. Weniger Fehler.</p></div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:12,marginTop:22}}>
       {['Zürcher Kalendertag statt UTC-Fehler nach Mitternacht','PDFs öffnen wieder zuverlässig','Empfänger-Orte mit amtlichem Provinz/Municipio/Distrito-Katalog','Automatische Zahlungszuordnung korrigiert: eine Zahlung deckt nur eine Rechnung'].map((item,i)=>{const I=i===2?MapPinned:i===3?ShieldCheck:Check;return <div key={item} style={{display:'grid',gridTemplateColumns:'22px 1fr',gap:10,lineHeight:1.38}}><I size={19} color='var(--primary)'/><span>{item}</span></div>})}
      </div>
    </article>
   </section>

   <footer style={{padding:'18px 24px',background:'linear-gradient(120deg,var(--brand-color-navy-deep,var(--foreground)),var(--brand-color-navy,var(--foreground)))',color:'#fff'}}>
    <div style={{fontSize:11,letterSpacing:2.2,textTransform:'uppercase',opacity:.7,marginBottom:12}}>Heute verbessert</div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:10}}>
      {['Operativ','Finanzen','KYC','Stabilität'].map(label=><div key={label} style={{border:'1px solid rgba(255,255,255,.2)',borderRadius:10,padding:'14px 10px',textAlign:'center',fontWeight:700,letterSpacing:.5}}>{label}</div>)}
    </div>
   </footer>
 </div>;
}
