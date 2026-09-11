export type SceneNode={kind:'rect'|'text'|'brand'|'chart'|'linechart';x:number;y:number;w:number;h:number;fill?:string;text?:string;pt?:number;color?:string;bold?:boolean;align?:'left'|'center'|'right';shape?:string;labels?:string[];series?:{name:string;values:number[];color:string}[]};
export function slideScene(id:string,deck:Record<string,any>):{width:number;height:number;nodes:SceneNode[]};
