const information = document.getElementById('with-global-info')
information.innerText = `This app is using Chrome (v${versionss.chrome()}), Node.js (v${versionss.node()}), and Electron (v${versionss.electron()})`

const pingPong = async () => {
    const res = await window.versionss.ping()
    document.getElementById('fromIpc').innerHTML = res
}

pingPong()

// handle one way ipc
const setBtn = document.querySelector('#setTitleBtn')
const inpTitle = document.querySelector('#titleInput')

setBtn.addEventListener('click', () => {
    const title = inpTitle.value
    electronAPI.setTitle(title)
})

// handle two way ipc
const btnOpenFile = document.querySelector("#btnOpenFile")
btnOpenFile.addEventListener('click', async () => {
    console.log('test two way')
    const paths = await electronAPI.openFile()
    document.querySelector('#openFilePath').innerText = paths
})