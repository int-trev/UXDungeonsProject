let arr = new Array ("hi1", "hi2")
function ChangeCharacterText(id)
{
    var characterTextSection = document.getElementById("characterText");
    characterTextSection.innerHTML = arr[id];
}