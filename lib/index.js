const firebase = require('./firebase');
const validateInputFields = require('./validate-input-fields');
const renderSnippet = require('./render-gains');
const  {
  $snippetsSection,
  $newSnippetForm,
  $newSnippetTitle,
  $newSnippetCode,
  $newSnippetSubmit,
  $signInButton,
  $userInfo
} = require('./elements');
const provider = new firebase.auth.GoogleAuthProvider();

$newSnippetTitle.on('keyup', validateInputFields);
$newSnippetCode.on('keyup', validateInputFields);

$newSnippetForm.on('submit', (e) => {
  e.preventDefault();

  const title = $newSnippetTitle.val();
  const code = $newSnippetCode.text();

  $snippetsSection.append(renderSnippet(title, code));

  $newSnippetTitle.val('');
  $newSnippetCode.val('');
});

let currentUser;

$signInButton.on('click', () => {
  firebase.auth().signInWithPopup(provider);
});


firebase.auth().onAuthStateChanged((user) => {
  currentUser = user;
  $signInButton.toggle(!currentUser);
  $newSnippetForm.toggle(!!currentUser);

  console.log(user);

  if (currentUser) {
    const {
      displayName,
      email
    } = currentUser;
    $userInfo.text(`Signed in as ${displayName} (${email}).`);
  } else {
    $userInfo.text('');
  }

});


const snippetsReference = firebase.database().ref().child('snippets');
  snippetsReference.on('value', (snapshot) => {
  const snippet = snapshot.val();
  console.log(snippet);
});
