let InterviewList =[];
let rejectList =[];
let currentStatus ='all';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectCount = document.getElementById('rejectCount');

let allbtn = document.getElementById('all-btn');
let interviewBtn = document.getElementById('interview-btn');
let rejectedBtn = document.getElementById('rejected-btn');

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main')
const filterSection = document.getElementById('filtered-section')

function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = InterviewList.length;
    rejectCount.innerText = rejectList.length;
}
calculateCount();

function toggleStyle(id) {
    allbtn.classList.add('btn-neutral/4', 'btn-outline');
    interviewBtn.classList.add('btn-neutral/4', 'btn-outline');
    rejectedBtn.classList.add('btn-neutral/4', 'btn-outline');

    allbtn.classList.remove('btn-active','btn-info');
    interviewBtn.classList.remove('btn-active','btn-info');
    rejectedBtn.classList.remove('btn-active','btn-info');
    
    const selected = document.getElementById(id);
    currentStatus =id;
    
    selected.classList.remove('btn-neutral/4', 'btn-outline');
    selected.classList.add('btn-active','btn-info');
    // rederInterview()

    if (id=='interview-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    } else if(id=='all-btn'){
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    } else if(id=='rejected-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderReject();
    }

    if (id == 'dlt-btn') {
        
    }
    
}

// 2
mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interviewClick')) {

        event.target.disabled =true;
        const parentNode = event.target.parentNode.parentNode;
        // console.log(parentNode)
        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const status = parentNode.querySelector('.statusChk').innerText;
        const details = parentNode.querySelector('.details').innerText;
        const interviewClicked = parentNode.querySelector('.interviewClick').setAttribute('disabled', 'true');
        const rejectClicked = parentNode.querySelector('.rejectClick').removeAttribute('disabled', 'true');

        

        parentNode.querySelector('.statusChk').innerText = 'Interviewed';

        const cardInfo = {
            companyName,
            position,
            location,
            status: 'Interviewed',
            details,
            interviewClicked,
            rejectClicked
        }

        const companyExist = InterviewList.find(item => item.companyName == cardInfo.companyName);
        if (!companyExist) {
            InterviewList.push(cardInfo)
        }

        rejectList =rejectList.filter(item=> item.companyName != cardInfo.companyName);

        if (currentStatus=='rejected-btn') {
            renderReject();

        }
        calculateCount();


        // console.log(companyName,position,location,status);
        // calculateCount()
    } else if(event.target.classList.contains('rejectClick')){
        // console.log('clicked')
         const parentNode = event.target.parentNode.parentNode;
        // console.log(parentNode)
        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const status = parentNode.querySelector('.statusChk').innerText;
        const details = parentNode.querySelector('.details').innerText;
        const interviewClicked = parentNode.querySelector('.interviewClick').removeAttribute('disabled', 'true');
        const rejectClicked = parentNode.querySelector('.rejectClick').setAttribute('disabled', 'true');

         parentNode.querySelector('.statusChk').innerText = 'Rejected';

        const cardInfo = {
            companyName,
            position,
            location,
            status: 'Rejected',
            details,
            interviewClicked,
            rejectClicked
        }

        const companyExist = rejectList.find(item => item.companyName == cardInfo.companyName);
        if (!companyExist) {
            rejectList.push(cardInfo)
        }

        InterviewList =InterviewList.filter(item=> item.companyName != cardInfo.companyName);

        if (currentStatus=='interview-btn') {
            renderInterview();

        }
        calculateCount();
    }
})






function renderInterview() {
    filterSection.innerHTML = `
    <div class="text-center items-center flex flex-col py-16 px-10 bg-white rounded-[8px] border-2 border-[#f1f2f4]">
                <img src="./jobs.png" alt="">
                <h3 class="text-2xl font-semibold">No Jobs Available</h3>
                <p class="text-gray-500">Check back soon for new job opportunities</p>
    </div>
    `;

    for (const interview of InterviewList) {
        // console.log(interview)
        let div = document.createElement('div');
        div.className = 'p-6 mb-3 bg-white rounded-[8px] border-2 border-[#f1f2f4]'
        div.innerHTML = `
                <div class="flex justify-between">
                    <h4 class="companyName text-[18px] font-semibold ">${interview.companyName}</h4>
                    <button id="dlt-btn" class="btn btn-soft btn-error btn-circle"><i class="fa-solid fa-trash"></i></button>
                </div>
                <p class="position text-gray-400">${interview.position}</p>
                <p class="location text-gray-400 my-5">${interview.location}</p>
                <p class="px-3 py-2 bg-[#eef4ff] inline-block my-2 statusChk">${interview.status}</p>
                <p class="mb-5 text-[14px] details">${interview.details}</p>
                <div>
                    <button class="interviewClick btn btn-outline btn-success" disabled>INTERVIEW</button>
                    <button class="rejectClick btn btn-outline btn-error">REJECTED</button>
                </div>
        `
            filterSection.innerHTML = ``

        filterSection.appendChild(div)
    }
}




function renderReject() {
    filterSection.innerHTML = `<div class="text-center items-center flex flex-col py-16 px-10 bg-white rounded-[8px] border-2 border-[#f1f2f4]">
                <img src="./jobs.png" alt="">
                <h3 class="text-2xl font-semibold">No Jobs Available</h3>
                <p class="text-gray-500">Check back soon for new job opportunities</p>
    </div>`;

    for (const reject of rejectList) {
        // console.log(interview)
        let div = document.createElement('div');
        div.className = 'p-6 mb-3 bg-white rounded-[8px] border-2 border-[#f1f2f4]'
        div.innerHTML = `
                <div class="flex justify-between">
                    <h4 class="companyName text-[18px] font-semibold ">${reject.companyName}</h4>
                    <button id="dlt-btn" class="btn btn-soft btn-error btn-circle"><i class="fa-solid fa-trash"></i></button>
                </div>
                <p class="position text-gray-400">${reject.position}</p>
                <p class="location text-gray-400 my-5">${reject.location}</p>
                <p class="px-3 py-2 bg-[#eef4ff] inline-block my-2 statusChk">${reject.status}</p>
                <p class="mb-5 text-[14px] details">${reject.details}</p>
                <div>
                    <button class="interviewClick btn btn-outline btn-success" >INTERVIEW</button>
                    <button class="rejectClick btn btn-outline btn-error" disabled>REJECTED</button>
                </div>
        `
        filterSection.innerHTML = ``
        filterSection.appendChild(div)
    }
}