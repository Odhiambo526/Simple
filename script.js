//<!--
// Defining and Dalling Functions
function compute(f) {
    if (confirm("Are you sure?"))
    f.result.value = eval(f.expr.value)
    else
    alert("Please come back again.")
}
//-->