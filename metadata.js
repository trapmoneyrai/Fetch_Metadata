// desktop script
let fileInput = document.getElementById('file_input');
let chosenFile = document.getElementById('chosen-file');
let fileName = document.getElementById('file-name');

fileInput.onchange = () => {
	let reader = new FileReader();
	reader.readAsDataURL(fileInput.files[0]);
	console.log(fileInput.files[0]);
	reader.onload = () => {
		chosenFile.setAttribute('src', reader.result);
	};
	fileName.textcontent = fileInput.files[0].name;
	var fullPath = document.getElementById('file_input').value;
	if (fullPath) {
		var startIndex = fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/');
		var filename = fullPath.substring(startIndex);
		if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
			filename = filename.substring(1);
		}
		alert(filename);
	}
};

// mobile script
// Gaining access to the hamburger icon
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

// share button script
const shareButton = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const shareModal = document.querySelector('.share-now');

const title = window.document.title;
const url = window.document.location.href;

shareButton.addEventListener('click', () => {
	if (navigator.share) {
		navigator
			.share({
				title: `${title}`,
				url: `${url}`,
			})
			.then(() => {
				console.log('Thanks for sharing!');
			})
			.catch(console.error);
	} else {
		overlay.classList.add('show-share');
		shareModal.classList.add('show-share');
	}
});

overlay.addEventListener('click', () => {
	overlay.classList.remove('show-share');
	shareModal.classList.remove('show-share');
});

// download button using html2pdf.js

window.onload = function () {
	document.getElementById("download-btn").addEventListener("click", () => {
		const metadataFile = this.document.getElementById("display-metadata");
		console.log(metadataFile)
		var opt = {
			margin:       1,
			filename:     'mymetadata.pdf',
			image:        { type: 'jpeg', quality: 0.98 },
			html2canvas:  { scale: 2 },
			jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
		  };
		html2pdf().from("display-metdata").set(opt).save();
	})
}
