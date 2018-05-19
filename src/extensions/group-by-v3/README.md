# Table group-by-v3

Use Plugin: [bootstrap-table-group-by-v3](https://github.com/wenzhixin/bootstrap-table/tree/master/src/extensions/group-by-v3) </br>
You must include the bootstrap-table-group-by-v3.css file in order to get the appropriate style

## Usage

```html
<link rel="stylesheet" type="text/css" href="extensions/group-by-v3/bootstrap-table-group-by-v3.css">
<script src="extensions/group-by-v3/bootstrap-table-group-by-v3.js"></script>
```

jsFiddle example: [group-by-v3](https://jsfiddle.net/Bighamster/fj8d7kvn/)

### Assumptions

* data is loaded entirely
* data is pre-ordered in a proper way

## Options

### groupBy

* type: String
* description: Set the name of the field that you want to group the data.
* example: "department"
* default: ""

### groupBySum

* type: String
* description: Set the names of the fields by which you want to calculate sums
* example: "salary tax qty"
* default: ""

### groupByCount

* type: String
* description: Set the names of the fields by which you want to calculate counts
* example: "name date"
* default: ""

### groupByAvg

* type: String
* description: Set the names of the fields by which you want to calculate averages
* example: "tax hours"
* default: ""
