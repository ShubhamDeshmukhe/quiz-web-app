const questions = [
    {
        'que': "Which of the following is a markup language ? ",
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': "Which of the following is a stylesheet ? ",
        'a': 'CSS',
        'b': 'HTML',
        'c': 'PHP',
        'd': 'JavaScript',
        'correct': 'a'
    },
    {
        'que': "Which of the following is a Scripting language ? ",
        'a': 'CSS',
        'b': 'HTML',
        'c': 'PHP',
        'd': 'JavaScript',
        'correct': 'd'
    },
    {
        'que': "Inside which HTML element do we put the JavaScript?",
        'a': "&#60;javascript&#62;",
        'b': "&#60;script&#62;",
        'c': "&#60;js&#62;",
        'd': "&#60;scripting&#62;",
        'correct': "b"
    },
    {
        'que': "Where is the correct place to insert a JavaScript?",
        'a': "The &#60;body&#62; section",
        'b': "The &#60;head&#62; section",
        'c': "Both the &#60;head&#62; section and the &#60;body&#62; section are correct",
        'd': "None of the above",
        'correct': "c"
    },
    {
        'que': "How do you round the number 7.25, to the nearest integer?",
        'a': "Math.round(7.25)",
        'b': "Math.rnd(7.25)",
        'c': "round(7.25)",
        'd': "rnd(7.25",

        'correct': "a"
    },
    {
        'que': 'How do you write "Hello World" in an alert box?',
        'a': 'alert("Hello World")',
        'b': 'msg("Hello World")',
        'c': 'msgBox("Hello World")',
        'd': 'alertBox("Hello World")',
        'correct': "a"
    },
    {
        'que': 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        'a': "if &#60;&#62;5",
        'b': "if(i != 5)",
        'c': "if i&#60;&#62; 5",
        'd': "if i=!5 then",
        'correct': "b"
    },
    {
        'que': "How does a FOR loop start?",
        'a': "for i=1 to 5",
        'b': "for(i=5;i++)",
        'b': "for(i=5;i++)",
        'c': "for(i=0;i&#60;=5;i++)",
        'd': "for(i=0;i&#60;=5)",
        'correct': "c"
    },
    {
        'que': "Which event occurs when the user clicks on an HTML element?",
        'a': "onmouseover",
        'b': "onmouseclick",
        'c': "onclick",
        'd': "onchange",
        'correct': "c"
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;



const queBox = document.getElementById('queBox');
const optionInput = document.querySelectorAll('.option');


function loadquestion() {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    // console.log(data);
    queBox.innerHTML = `${index + 1}) ${data.que}`;

    optionInput[0].nextElementSibling.innerHTML = data.a;
    optionInput[1].nextElementSibling.innerHTML = data.b;
    optionInput[2].nextElementSibling.innerHTML = data.c;
    optionInput[3].nextElementSibling.innerHTML = data.d;
}
const subquiz = () => {
    const data = questions[index];
    const ans = getans();
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadquestion();
}

const getans = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }

        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
    document.getElementById('submit').style.background = "(218, 230, 251)";
}

function endQuiz() {
    document.getElementById("sub-main").innerHTML = ` <h3>Thank you! Your responce is submitted.</h3>
    <h3>${right}/${total} are correct.</h3>`

    document.getElementById("sub-main").style.background = "linear-gradient(to right, #fad0c4 0%, #ffd1ff 100%)";
}

loadquestion();