# triangles
## An exercise in creating triangle coordinates in a virtual grid image

---
## Description
### Objective 1
    Calculate the triangle coordinates for an image with right triangles such that for a given row (A- F) and column (1-12) you can produce a row column grid.
### Task 2:
    Given the vertex coordinates, calculate the row and column for the triangle.
## My thoughts
    Render the coordinates:

    image size: 60 x 60 pixels
    rows: 6
    row height: 10 pixels
    row width: 60 pixels
    squares per row: 6
    trianges per square: 2
    need:
    -three nested loops
    -keeping all calculations as simple number math.

        for each row (+=10)
            for each square (+=10)
                render triangle bottom-left
                render triangle top-right

    Lookup the grid coordinates via three vertices:

    -Since two triangles in one cell share coordinates, use the triangle center.
    -Using the triangle center:
         -Column number = triangle center x, divided by half the cell width (5).
         -Column coordinate is an alpha character starting at 'A', so increment ascii value 'A', by the column numeric value.
         -Row number = triangle center y, divided by cell height (10).

## Super simple classes to support the excercise:

### point
A single x,y position.
```
class point {
    constructor(public x: number, public y: number){...}
    trunc(): point {...}
    toString(): string {...}
}
```
### triangle
A single triangle to store vertices.
```
class triangle {
    constructor(public v1: point, public v2: point, public v3: point) {}
    toString(): string {...}
}
```
### triangles
The main app class.
```
class triangles {
    public renderTriangles(): void  {...}
    static center(t: triangle): point {...}; //calc helper
    static position(t: triangle): string {...}; //map the vertices to row,col
}

```


## Installation

#### ***prerequsites

1. Install node js, (ONLY IF NEEDED)

2. Install the TypeScript compiler (ONLY IF NEEDED)

```
npm install -g typescript
```
> note: Installing the latest or closest to the latest are assumed
> for this excercise. Version variations and incompatibitities
> are beyond the scope of these instructions.


### Installing the app
> note: This is a BARE-MINIMUM single file commandline example. This is NOT how you should build a real app in the real world...nuff said.

1. create the app folder
```
mkdir app
```
2. cd into the new folder
```
cd app
```
3. Compile/Transpile the app
```
tsc --lib 'ES2015' app.ts
```
4. Run the app
```
node app.js
```
