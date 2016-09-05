const firebase = require('./firebase');
const validateInputFields = require('./validate-input-fields');
const renderSnippet = require('./render-gains');
const provider = new firebase.auth.GoogleAuthProvider();
const {
  $snippetsSection,
  $newSnippetForm,
  $newSnippetTitle,
  $newSnippetCode,
  $newSnippetSubmit,
  $signInButton,
  $userInfo
} = require('./elements');

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
