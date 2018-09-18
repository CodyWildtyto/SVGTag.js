# SVGTag.js
A pure JavaScript plugin that be able to insert SVG elements which are modifiable instead of IMG or OBJECT elements from SVG files.

![preview-27509-in](https://media.giphy.com/media/EPSuQxL0Toqxr3KTfo/giphy.gif)

## Usage

### Include SVGTag.js

Add **svgtag.js** file as ```script``` tag.

```
<script src="svgtag.js"></script>
```

Or minify file with **svgtag.min.js**.

```
<script src="svgtag.min.js"></script>
```

There are two ways to perform SVGTag.

### Scan all SVGTag-elements

Add ```img``` or ```object``` tags with ```svg-tag``` attribute.

```
<img svg-tag src="demo_a.svg" />
```

```
<object svg-tag data="demo_a.svg"></object>
```

Use ```SVGTag.scan``` method to find all SVGTag-elements and launch them.

```
SVGTag.scan();
```

### Launch each SVGTag-element

Add ```img``` or ```object``` tag normally.

```
<img id="DemoB" src="demo_b.svg" />
```

```
<object id="DemoB" src="demo_b.svg"></object>
```

Perform each SVGTag-element by pointing the original element.

```
SVGTag.new(document.getElementById("DemoB"));
```

## Methods


### SVGTag.new

Create a SVGTag-element from a ```img``` or ```object``` element.

```
_element = SVGTag.new( _originalElement )
```
_parameter: **\_originalElement:HTMLElement** / return: **\_element:HTMLElement**_


### SVGTag.scan
Launch all SVGTag-elements in document body.

```
SVGTag.scan()
```

## Values
### SVGTag.list

An array of SVGTag-elements.

```
_ary = SVGTag.list
```
_return: **\_ary:Array** (include HTMLElements)_


## Examples

* [Basic](http://wildtyto.github.io/SVGTag.js/example/)

## License
Released under the <a href="http://www.opensource.org/licenses/MIT">MIT license</a>.