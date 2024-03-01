function lightTheme() {
    //Adicionar class "dark" pra tag HTML e ativa o tema noturno
    const mainDoc = document.querySelector("html")
    mainDoc.classList = ""

    let lightBtn = document.querySelector(".lightBtn")
    lightBtn.classList = lightBtn.classList + " scale-125"

    let darkBtn = document.querySelector(".darkBtn")
    darkBtn.classList.remove("scale-125")
    //----------------------------------------

    //Esconde icones do tema noturno
    const gitDark = document.querySelector(".git-dark-theme")
    gitDark.classList = gitDark.classList + " hidden"

    const linkedinDark = document.querySelector(".linkedin-dark-theme")
    linkedinDark.classList = linkedinDark.classList + " hidden"

    const gitDarkFooter = document.querySelector(".git-dark-theme-footer")
    gitDarkFooter.classList = gitDarkFooter.classList + " hidden"

    const linkedinDarkFooter = document.querySelector(".linkedin-dark-theme-footer")
    linkedinDarkFooter.classList = linkedinDarkFooter.classList + " hidden"

    const moonDark = document.querySelector(".moon-dark-theme")
    moonDark.classList = moonDark.classList + " hidden"

    const sunDark = document.querySelector(".sun-dark-theme")
    sunDark.classList = sunDark.classList + " hidden"
    //----------------------------------------

    //Exibe icones do tema claro
    const gitLight = document.querySelector(".git-light-theme")
    gitLight.classList.remove("hidden")

    const linkedinLight = document.querySelector(".linkedin-light-theme")
    linkedinLight.classList.remove("hidden")

    const gitLightFooter = document.querySelector(".git-light-theme-footer")
    gitLightFooter.classList.remove("hidden")

    const linkedinLightFooter = document.querySelector(".linkedin-light-theme-footer")
    linkedinLightFooter.classList.remove("hidden")

    const moonLight = document.querySelector(".moon-light-theme")
    moonLight.classList.remove("hidden")

    const sunLight = document.querySelector(".sun-light-theme")
    sunLight.classList.remove("hidden")
    //----------------------------------------
}

function darkTheme() {
    //Remove class "dark" da tag HTML e desativa o tema noturno
    const mainDoc = document.querySelector("html")
    mainDoc.classList = "dark"

    let darkBtn = document.querySelector(".darkBtn")
    darkBtn.classList = darkBtn.classList + " scale-125"

    let lightBtn = document.querySelector(".lightBtn")
    lightBtn.classList.remove("scale-125")
    //----------------------------------------

    //Exibe icones do tema noturno
    const gitDark = document.querySelector(".git-dark-theme")
    gitDark.classList.remove("hidden")

    const linkedinDark = document.querySelector(".linkedin-dark-theme")
    linkedinDark.classList.remove("hidden")

    const gitDarkFooter = document.querySelector(".git-dark-theme-footer")
    gitDarkFooter.classList.remove("hidden")

    const linkedinDarkFooter = document.querySelector(".linkedin-dark-theme-footer")
    linkedinDarkFooter.classList.remove("hidden")

    const moonDark = document.querySelector(".moon-dark-theme")
    moonDark.classList.remove("hidden")

    const sunDark = document.querySelector(".sun-dark-theme")
    sunDark.classList.remove("hidden")
    //----------------------------------------

    //Esconde icones do tema claro
    const gitLight = document.querySelector(".git-light-theme")
    gitLight.classList = gitLight.classList + " hidden"

    const linkedinLight = document.querySelector(".linkedin-light-theme")
    linkedinLight.classList = linkedinLight.classList + " hidden"

    const gitLightFooter = document.querySelector(".git-light-theme-footer")
    gitLightFooter.classList = gitLightFooter.classList + " hidden"

    const linkedinLightFooter = document.querySelector(".linkedin-light-theme-footer")
    linkedinLightFooter.classList = linkedinLightFooter.classList + " hidden"

    const moonLight = document.querySelector(".moon-light-theme")
    moonLight.classList = moonLight.classList + " hidden"

    const sunLight = document.querySelector(".sun-light-theme")
    sunLight.classList = sunLight.classList + " hidden"
    //----------------------------------------
}