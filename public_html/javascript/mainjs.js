/* Editor: Johnson Gao
 * Date This Project Created:
 * Description Of This Class:
 */
var moneyAvaliable;

/**
 * Display the hidden text.
 * @param {type} element
 * @returns {undefined}
 */
function showHiddenText(element)
{
    document.getElementById(element).classList.toggle("showInline");
}

/**
 * Toggle a pop up frame.
 * @param {type} name
 * @returns {undefined}
 */
function togglePopup(name)
{
    document.getElementById(name).classList.toggle("show");
}

function showDetentionVideo()
{
    document.getElementById('detentionVideo').innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/b99fB1-9j2Y\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
}



function inputByYears()
{
    yearsIn = parseFloat(document.getElementById('yearsInput').value);
    if(isNaN(yearsIn))
    {
        calcWarning('Please input a number');
    }
    else if(yearsIn <= 0)
    {
        calcWarning('You need to stay at least a year');
    }else
    {
        showMoneyLeft(yearsIn);
    }
}

function inputBanBan()
{
    //variable declearation;
    var enrollYear = parseFloat(document.getElementById('enrollDateSelect').value);
    var graduateYear = parseFloat(document.getElementById('graduatingSelect').value);
    //var yearsIn;

    if (enrollYear === -1.0)
    {
        calcWarning("Please select enrollment year");
    } else if (graduateYear === -1.0)
    {
        calcWarning("Please select your graduating year.");
    } else
    {
        yearsIn = graduateYear - enrollYear;
        showMoneyLeft(yearsIn);
    }
}

function showMoneyLeft(yearsIn)
{
    var initial,homestayPrice,insurancePrice,dayTuition,foodCost;
    var yearsLeft = yearsIn;
    
    document.getElementById('calculateResultSec').classList.toggle('show');
    if(yearsIn < 1.0)
    {
        calcWarning('You need to stay at least one year.');
    }else
    {
        //the first yeat tuition is 72000
        initial = 72000;
        yearsLeft--;
        //if you stay more than a year, 70000per yr.
        if (yearsLeft>0)
        {
            initial += yearsLeft * 70000;
        }
        //calculate price
        homestayPrice = yearsIn * 13000;
        foodCost = yearsIn * 4500;
        dayTuition = yearsIn * 29300;
        insurancePrice = yearsIn * 300;  
        
        moneyAvaliable = initial - homestayPrice - foodCost - dayTuition - insurancePrice;
        
        //show user result.
        document.getElementById('homestayPrice').innerHTML = homestayPrice;
        document.getElementById('foodCost').innerHTML = foodCost;
        document.getElementById('dayTuition').innerHTML = dayTuition;
        document.getElementById('insurancePrice').innerHTML = insurancePrice;
        document.getElementById('moneyLeftForMendetory').innerHTML = moneyAvaliable;
        
        document.getElementById('calculateResultSec').style.display="block";
    }   
}

function calcWarning(msg)
{
    document.getElementById('selectWarning').innerHTML = msg;
}

function showCOVID19IMG()
{
    document.getElementById('covid-img-1').classList.toggle('show');
    document.getElementById('covid-img-2').classList.toggle('show');
}

