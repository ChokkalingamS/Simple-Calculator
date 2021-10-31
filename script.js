
document.body.innerHTML+=
`
<div class="container">
<div class="header"></div>
<div class="body"></div>
</div>
`
document.querySelector('.body').innerHTML=`

<table>

<tr>

<td colspan="4"> <input type="text" name="display" onloadedmetadata="welcome()" maxlength="17" class="display"> </td>

</tr>


<tr>

<td> <button type="button"  onclick="num(this.value)"  class="num" value="7"> 7 </button>  </td> 
<td> <button type="button"  onclick="num(this.value)"  class="num" value="8"> 8 </button>  </td>
<td> <button type="button"  onclick="num(this.value)"  class="num" value="9"> 9 </button>  </td>
<td> <button type="button"  onclick="del()"            id="delete"> DEL          </button>  </td>

</tr>

<tr>

<td> <button type="button"  onclick="num(this.value)" class="num"     value="4"> 4 </button> </td>
<td> <button type="button"  onclick="num(this.value)" class="num"     value="5"> 5 </button> </td>
<td> <button type="button"  onclick="num(this.value)" class="num"     value="6"> 6 </button> </td>
<td> <button type="button"  onclick="num(this.value)" class="operate" value="+"> + </button> </td>

</tr>

<tr>

<td> <button type="button"  onclick="num(this.value)" class="num"     value="1"> 1 </button> </td>
<td> <button type="button"  onclick="num(this.value)" class="num"     value="2"> 2 </button> </td>
<td> <button type="button"  onclick="num(this.value)" class="num"     value="3"> 3 </button> </td>
<td> <button type="button"  onclick="num(this.value)" class="operate" value="-"> - </button> </td>

</tr>

<tr>

<td> <button type="button"  onclick="num(this.value)" class="num" id="dot" value="."> . </button> </td>
<td> <button type="button"  onclick="num(this.value)" class="num"          value="0"> 0 </button> </td>
<td> <button type="button"  onclick="num(this.value)" class="operate"      value="/"> / </button> </td>
<td> <button type="button"  onclick="num(this.value)" class="operate"      value="*"> * </button> </td>

</tr>

<tr>

<td colspan="2"> <button type="button" id="reset" onclick="reset()">    RESET </button> </td>
<td colspan="2"> <button type="button" id="equal" onclick="calculate()"> =    </button> </td>

</tr>

</table>
`

// Reset values
function reset()
{
    document.querySelector('.display').value="";
}

// Getting input from onscreen keyboard
function num(number)
{
    document.querySelector('.display').value+=number;
}

// Calculating input values
function calculate()
{
    if(document.querySelector('.display').value=="")
    {
     
        document.querySelector('.display').value="";
    }
    else
    {
    try 
    {
        document.querySelector('.display').value=eval(document.querySelector('.display').value);
            
    } catch (error) 
    {
        document.querySelector('.display').value="ERROR";
    }
    }
    
}

// Deleting input values
function del()
{
    let s=document.querySelector('.display').value.split('');
    if(s.length)
    {
    s.pop();
    document.querySelector('.display').value=s.join('');
    }
}

// Welcome
function welcome()
{
    document.querySelector('.display').value="Hi Human";
}