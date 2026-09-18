// Local glTF coordinates: X frontage, Y eye height, Z points towards street.
export const ROUTE=[[1.93,1.62,8.7],[1.93,1.62,7.4],[1.93,1.62,6.02],[.55,1.62,6.02],[.55,1.62,4.8],[.55,1.62,2.55],[.55,1.62,.15],[.55,1.62,-2.1],[.55,1.62,-3.85]];
export const STOPS={window:{index:3,label:'Discovery window',look:[-.15,1.45,-2.8]},gallery:{index:4,label:'Main sales floor',look:[-.85,1.2,4.8]},cabinets:{index:6,label:'The cabinets',look:[-2.15,1.4,.55]},collector:{index:7,label:'Collector zone',look:[-.85,1.2,-2.1]},counter:{index:8,label:'The counter',look:[.6,1.4,-4.65]}};
export function validInside(p,colliders,radius=.17){
 const [x,,z]=p;if(Math.abs(x)>2.59-radius||z< -6.975+radius)return false;
 if(z>6.975 && !(x>1.44+radius&&x<2.43-radius&&z<8.8))return false;
 return !colliders.some(c=>x>c.min[0]-radius&&x<c.max[0]+radius&&z>c.min[1]-radius&&z<c.max[1]+radius);
}
export function routeViolations(colliders){const bad=[];for(let j=0;j<ROUTE.length-1;j++){const a=ROUTE[j],b=ROUTE[j+1];const n=Math.ceil(Math.hypot(a[0]-b[0],a[2]-b[2])*25);for(let i=0;i<=n;i++){const t=i/n,p=a.map((v,k)=>v+(b[k]-v)*t);if(!validInside(p,colliders))bad.push({segment:j,point:p})}}return bad;}
export function nearestRoute(p){let best=3,dist=Infinity;ROUTE.forEach((v,i)=>{if(i<3)return;const d=Math.hypot(v[0]-p[0],v[2]-p[2]);if(d<dist){dist=d;best=i}});return best;}
