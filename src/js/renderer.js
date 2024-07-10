const information = document.getElementById('with-global-info')
information.innerText = `This app is using Chrome (v${versionss.chrome()}), Node.js (v${versionss.node()}), and Electron (v${versionss.electron()})`

const pingPong = async () => {
    const res = await window.versionss.ping()
    document.getElementById('fromIpc').innerHTML = res
}

pingPong()