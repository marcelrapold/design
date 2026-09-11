import {notFound} from 'next/navigation';
import ReferencePage from '../_components/reference-page';
import {pages} from '../_components/catalog';
export const dynamicParams=false;
export function generateStaticParams(){return pages.filter(p=>p.id!=='overview'&&p.id!=='praesentationslogik').map(p=>({section:p.id}));}
export async function generateMetadata({params}:{params:Promise<{section:string}>}){const {section}=await params;return {title:`${pages.find(p=>p.id===section)?.title??'Referenz'} · Design Framework`};}
export default async function Page({params}:{params:Promise<{section:string}>}){const {section}=await params;if(!pages.some(p=>p.id===section))notFound();return <ReferencePage section={section}/>;}
