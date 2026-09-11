export type SceneNode={kind:'rect'|'text'|'brand';x:number;y:number;w:number;h:number;fill?:string;text?:string;pt?:number;color?:string;bold?:boolean};
export function slideScene(id:string,deck:Record<string,any>):{width:number;height:number;nodes:SceneNode[]};
