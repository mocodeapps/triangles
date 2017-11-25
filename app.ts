/*
    app.ts
    Rendering Triangles
    written by mocodeapps, (c) 2017
*/
//console.log hack for single file execution w/o dependancies for this simple test
function log(message:string){
    eval('console').log(message)
}
class point {
    constructor(public x: number, public y: number) {
    }
    trunc() {
        return new point(Math.trunc(this.x), Math.trunc(this.y));
    }
    toString() {
        return `${this.x},${this.y}`;
    }
}
class triangle {
    constructor(public v1: point, public v2: point, public v3: point) {
    }
    toString() {
        let p1: string = `v1(${this.v1.toString()})`;
        let p2: string = `v2(${this.v2.toString()})`;
        let p3: string = `v3(${this.v3.toString()})`;
        let t1 = `${p1},${p2},${p3}`;
        return t1;
    }
}
class triangles {
    private triData: triangle[] = [];
    constructor() { };
    renderTriangles() : void {
        let size = 10;
        for (let y = 0; y < 60; y += size) {
            for (let x = 0; x < 60; x += size) {
                this.triData.push(new triangle(new point(x, y + size), new point(x, y), new point(x + size, y + size)));
                this.triData.push(new triangle(new point(x + size, y), new point(x, y), new point(x + size, y + size)));
            }
        }
    }
    toString() {
        let cnt=1;
        for (let tt of this.triData) {
            log(`triangle ${cnt} @ ${tt.toString()}`);
            cnt++;
        }
    }
    static center(t: triangle): point {
        return new point((t.v1.x + t.v2.x + t.v3.x) / 3, (t.v1.y + t.v2.y + t.v3.y) / 3);
    }
    static position(t: triangle): string {
        let p1: point = triangles.center(t);
        let rowlabel: string = 'A';
        rowlabel = String.fromCharCode(rowlabel.charCodeAt(0) + (Math.trunc(p1.y / 10)));
        let col = Math.trunc(p1.x / 5) + 1;
        //let t1 = `ctr:(${p1.trunc().toString()}) pos:${rowlabel}${col}`;
        let t1 = `triangle (${t.v1.toString()})(${t.v2.toString()})(${t.v3.toString()}) is at position ${rowlabel}${col}`;
        return t1;
    }
}
log("");
log("-------------------------------------------");
log("Rendering Triangles, v1.0.0");
log("mocodeapps.com, (c) 2017");
log("-------------------------------------------");
log("...calculating");
const app: triangles = new triangles();
app.renderTriangles();
app.toString();
log("...create a few triangles to verify");
log("...using a static func to verify 100% calculated");
log("...no validation for this test...eek");
//Test input data
//#16,B4 v1(20,10),v2(10,10),v3(20,20)
//#20,B8 v1(40,10),v2(30,10),v3(40,20)
//#51,E3 v1(10,50),v2(10,40),v3(20,50)
log(triangles.position( new triangle(new point(20,10), new point(10,10),new point(20,20))));
log(triangles.position( new triangle(new point(40,10), new point(30,10),new point(40,20))));
log(triangles.position( new triangle(new point(10,50), new point(10,40),new point(20,50))));
