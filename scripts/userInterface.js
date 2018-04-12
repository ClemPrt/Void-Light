let waitingButton = document.querySelector('#waitingClickButton'), start , main = document.querySelector('main'), logo = document.querySelector('#logo'), nav, accueil, nouveaute,imgFirstDivNav,forum,support, playButton, body = document.querySelector('body'), firstDivNav, secondDivNav, imgSecondDivNav, arrowDown , title = document.querySelector('#title'), imgSponsorsArrowUp, sponsorsTitle,fisrtRowSponsors,secondRowSponsors, spaceX, cocaCola, atom, hetic, ubisoft, independantGameFestival, parisGamesWeek, wootBox,sponsorsContainer, firstRowFooter,secondRowFooter,footer,contact, mentionsLegales,equipe,twitch,git,facebook,twitter,mainPageTitle,littleTitle,historyTitle,historyText,continueButton,loginPreButton,form,formInput,formTextArea,formSendButton,loginPreButtonContactPage,loginDiv,loginForm,user,pass,loginButton,forgetUser,or,newUser,divNewsContainer,newsTitle,close,firstDivNews,secondDivNews, thirdDivNews,firstImgNews,secondImgNews,thirdImgNews,firstVersionNews,secondVerseionNews,thirdVersionNews,firstDate,secondDate,thirdDate,firstDetail,secondDetail,thirdDetail,supportTitle

// Lancement de la fonction permetant le clignottement
start = window.setInterval(startBlink, 800)

// Lancement de la fonction de base
afterFirstClick()

// Fonction qui gere le clignotement
function startBlink(){
  if (waitingButton.style.visibility == 'visible'){
    waitingButton.style.visibility='hidden'
  }
  else{
    waitingButton.style.visibility='visible'
  }
}

// Fonction qui gère l'arret du clignotement (inutile ici)
// function stopBlink(){
//   clearInterval(start)
// }

// Fonction qui gere la creation de la page d'acceuil et de toute ses pages annexes

function afterFirstClick(){
  waitingButton.addEventListener(
    'click',
    function(){
      // supressions d'elements non voulu
      main.removeChild(logo)
      main.removeChild(waitingButton)

      // Creation de tous les elements de la page d'acceuil

      // ELEMENTS A CREER
      // <div id="playButton">JOUER</div>
      // <img src="./images/loginPreButton.png" id="loginPreButton" alt="Bouton d'acces pour se connecter">
      // <nav>
      //   <a href="#">Accueil</a>
      //   <a href="#">Nouveauté</a>
      //   <img src="./images/logoFooter.png" alt="Logo">
      //   <a href="#">Forum</a>
      //   <a href="#">Support</a>
      //   <div id="moreButton"><img src="./images/arrowDown.png" alt="Fleches vers le bas pour plus d'option"></div>
      // </nav>

      playButton = document.createElement('div')
      playButton.innerHTML = 'JOUER'
      playButton.setAttribute('id','playButton')
      firstDivNav = document.createElement('div')
      nav = document.createElement('nav')
      nav.setAttribute('id','nav')
      accueil = document.createElement('a')
      accueil.innerHTML = 'Accueil'
      accueil.classList.add('selected')
      nouveaute = document.createElement('a')
      nouveaute.innerHTML = 'Nouveauté'
      forum = document.createElement('a')
      forum.innerHTML = 'Forum'
      support = document.createElement('a')
      support.innerHTML = 'Support'
      imgFirstDivNav = document.createElement('img')
      imgFirstDivNav.setAttribute('src','./images/logoFooter.png')
      imgFirstDivNav.setAttribute('alt','Logo')
      secondDivNav = document.createElement('div')
      secondDivNav.setAttribute('id','moreButton')
      imgSecondDivNav = document.createElement('img')
      imgSecondDivNav.setAttribute('src','./images/arrowDown.png')
      imgSecondDivNav.setAttribute('alt','Fleches vers le bas pour plus d\'option')
      loginPreButton = document.createElement('img')
      loginPreButton.classList.add('loginPreButton')
      loginPreButton.setAttribute('src','./images/loginPreButton.png')
      loginPreButton.setAttribute('alt','Bouton d\'acces pour se connecter')

      // Mise en place de tous les elements
      main.appendChild(playButton)
      main.appendChild(loginPreButton)
      body.appendChild(nav)
      nav.appendChild(firstDivNav)
      nav.appendChild(secondDivNav)
      firstDivNav.appendChild(accueil)
      firstDivNav.appendChild(nouveaute)
      firstDivNav.appendChild(imgFirstDivNav)
      firstDivNav.appendChild(forum)
      firstDivNav.appendChild(support)
      secondDivNav.appendChild(imgSecondDivNav)

      // Fonction qui creer la page sponsors
      moreOptions()
      // Fonction qui creer la page Histoire
      showHistoryAfterClickingPlay()
      // Fontction qui creer le pop up de support
      supportPage()
      // Fontction qui creer le pop up de login
      loginButtonEvent()
      // Fontction qui creer le pop up des nouveautées.
      newsPage()
    }
  )
}

function moreOptions(){
  // Evenements pour aller vers la page sponsors depuis la page d'accueil
  arrowDown = document.querySelector('#moreButton')
  arrowDown.addEventListener(
    'click',
    function(){

      // Supressions des elements non voulu
      main.removeChild(document.querySelector('#title'))
      main.removeChild(playButton)
      body.removeChild(nav)
      main.removeChild(loginPreButton)

      // Creations des nouveau elements de la page sponsors

      // A CREER :

      // <img id="arrowUp" src="./images/arrowUp.png" alt="Fleches vers le haut pour revenir au menu">
      // <div id="sponsors">
      //   <h1>Sponsors</h1>
      //   <div id="fisrtRowSponsors">
      //     <img class = "twoCol" src="./images/spaceX.png" alt="Images Du Sponsors : Space X ">
      //     <img class = "oneCol" src="./images/cocaCola.png" alt="Images Du Sponsors : Coca Cola">
      //     <img class = "oneCol" src="./images/atom.png" alt="Images Du Sponsors : Atom">
      //     <img class = "twoCol" src="./images/Hetic.png" alt="Images Du Sponsors : Hetic">
      //   </div>
      //   <div id="secondRowSponsors">
      //     <img class = "twoCol" src="./images/ubisoft.png" alt="Images Du Sponsors : Ubisoft">
      //     <img class = "oneCol" src="./images/independantGameFestival.png" alt="Images Du Sponsors : Independant Game Festival">
      //     <img class = "oneCol" src="./images/ParisGamesWeek.png" alt="Images Du Sponsors : Paris Game Week">
      //     <img class = "twoCol" src="./images/Wootbox.png" alt="Images Du Sponsors : WootBox">
      //   </div>
      // </div>
      // <footer>
      //   <div id="firstRow">
      //     <a href="#">Contact</a>
      //     <a href="#">Mentions Légales</a>
      //     <a href="#">L'équipe</a>
      //   </div>
      //   <div id="secondRow">
      //     <a href="#"><img src="./images/twitch.png" alt="Twitch Logo"></a>
      //     <a href="#"><img src="./images/git.png" alt="Git Logo"></a>
      //     <a href="#"><img src="./images/facebook.png" alt="Facebook Logo"></a>
      //     <a href="#"><img src="./images/twitter.png" alt="Twitter Logo"></a>
      //   </div>
      // </footer>

      imgSponsorsArrowUp = document.createElement('img')
      imgSponsorsArrowUp.setAttribute('id','arrowUp')
      imgSponsorsArrowUp.setAttribute('src','./images/arrowUp.png')
      imgSponsorsArrowUp.setAttribute('alt','Fleches vers le haut pour revenir au menu')
      sponsorsContainer = document.createElement('div')
      sponsorsContainer.setAttribute('id','sponsors')
      sponsorsTitle = document.createElement('h1')
      sponsorsTitle.innerHTML = 'Sponsors'
      fisrtRowSponsors= document.createElement('div')
      fisrtRowSponsors.setAttribute('id','fisrtRowSponsors')
      spaceX = document.createElement('img')
      spaceX.setAttribute('src','./images/spaceX.png')
      spaceX.setAttribute('alt','Images Du Sponsors : spaceX')
      spaceX.classList.add('twoCol')
      cocaCola = document.createElement('img')
      cocaCola.setAttribute('src','./images/cocaCola.png')
      cocaCola.setAttribute('alt','Images Du Sponsors :cocaCola')
      cocaCola.classList.add('oneCol')
      atom = document.createElement('img')
      atom.setAttribute('src','./images/atom.png')
      atom.setAttribute('alt','Images Du Sponsors : atom')
      atom.classList.add('oneCol')
      hetic = document.createElement('img')
      hetic.setAttribute('src','./images/Hetic.png')
      hetic.setAttribute('alt','Images Du Sponsors : hetic')
      hetic.classList.add('twoCol')
      secondRowSponsors= document.createElement('div')
      secondRowSponsors.setAttribute('id','secondRowSponsors')
      ubisoft = document.createElement('img')
      ubisoft.setAttribute('src','./images/ubisoft.png')
      ubisoft.setAttribute('alt','Images Du Sponsors : ubisoft')
      ubisoft.classList.add('twoCol')
      independantGameFestival = document.createElement('img')
      independantGameFestival.setAttribute('src','./images/independantGameFestival.png')
      independantGameFestival.setAttribute('alt','Images Du Sponsors : independant Game Festival')
      independantGameFestival.classList.add('oneCol')
      parisGamesWeek = document.createElement('img')
      parisGamesWeek.setAttribute('src','./images/ParisGamesWeek.png')
      parisGamesWeek.setAttribute('alt','Images Du Sponsors : Paris Games Week.png')
      parisGamesWeek.classList.add('oneCol')
      wootBox = document.createElement('img')
      wootBox.setAttribute('src','./images/Wootbox.png')
      wootBox.setAttribute('alt','Images Du Sponsors :Wootbox')
      wootBox.classList.add('twoCol')
      footer = document.createElement('footer')
      firstRowFooter= document.createElement('div')
      firstRowFooter.setAttribute('id','firstRow')
      contact = document.createElement('a')
      contact.innerHTML='Contact'
      contact.setAttribute('href','#')
      mentionsLegales = document.createElement('a')
      mentionsLegales.innerHTML='Mentions Légales'
      mentionsLegales.setAttribute('href','#')
      equipe = document.createElement('a')
      equipe.innerHTML='L\'équipe'
      equipe.setAttribute('href','#')
      secondRowFooter= document.createElement('div')
      secondRowFooter.setAttribute('id','secondRow')
      twitch =document.createElement('a')
      twitch.innerHTML='<img src="./images/twitch.png" alt="Twitch Logo">'
      twitch.setAttribute('href','#')
      git =document.createElement('a')
      git.innerHTML='<img src="./images/git.png" alt="Git Logo">'
      git.setAttribute('href','#')
      facebook =document.createElement('a')
      facebook.innerHTML='<img src="./images/facebook.png" alt="Facebook Logo">'
      facebook.setAttribute('href','#')
      twitter =document.createElement('a')
      twitter.innerHTML='<img src="./images/twitter.png" alt="Twitter Logo">'
      twitter.setAttribute('href','#')

      // Injection des nouveaux elements
      main.appendChild(imgSponsorsArrowUp)
      main.appendChild(sponsorsContainer)
      sponsorsContainer.appendChild(sponsorsTitle)
      sponsorsContainer.appendChild(fisrtRowSponsors)
      fisrtRowSponsors.appendChild(spaceX)
      fisrtRowSponsors.appendChild(cocaCola)
      fisrtRowSponsors.appendChild(atom)
      fisrtRowSponsors.appendChild(hetic)
      sponsorsContainer.appendChild(secondRowSponsors)
      secondRowSponsors.appendChild(ubisoft)
      secondRowSponsors.appendChild(independantGameFestival)
      secondRowSponsors.appendChild(parisGamesWeek)
      secondRowSponsors.appendChild(wootBox)
      main.appendChild(footer)
      footer.appendChild(firstRowFooter)
      firstRowFooter.appendChild(contact)
      firstRowFooter.appendChild(mentionsLegales)
      firstRowFooter.appendChild(equipe)
      footer.appendChild(secondRowFooter)
      secondRowFooter.appendChild(twitch)
      secondRowFooter.appendChild(git)
      secondRowFooter.appendChild(facebook)
      secondRowFooter.appendChild(twitter)

      // Evenements Pour revenir sur la page d'accueil
      imgSponsorsArrowUp =document.querySelector('#arrowUp')
      imgSponsorsArrowUp.addEventListener(
        'click',
        function(){
          // Supressions des elements non voulu
          main.removeChild(imgSponsorsArrowUp)
          main.removeChild(sponsorsContainer)
          main.removeChild(footer)

          //Creation des elements manquant de la page D'accueil
          mainPageTitle = document.createElement('div')
          mainPageTitle.setAttribute('id','title')
          mainPageTitle.innerHTML='Void Light'
          // Injection des elements
          main.appendChild(mainPageTitle)
          main.appendChild(playButton)
          main.appendChild(loginPreButton)
          body.appendChild(nav)
          nav.appendChild(firstDivNav)
          nav.appendChild(secondDivNav)
          firstDivNav.appendChild(accueil)
          firstDivNav.appendChild(nouveaute)
          firstDivNav.appendChild(imgFirstDivNav)
          firstDivNav.appendChild(forum)
          firstDivNav.appendChild(support)
          secondDivNav.appendChild(imgSecondDivNav)
        }
      )
    }
  )
}

// Fonction qui gere l'evenement une fois que l'on a clicker sur le bouton jouer
function showHistoryAfterClickingPlay(){
  playButton.addEventListener(
    'click',
    function(){

      // Supressions des elements non voulu
      main.removeChild(document.querySelector('#title'))
      main.removeChild(playButton)
      body.removeChild(nav)
      main.removeChild(loginPreButton)

      // Creations des nouveaux elements
      littleTitle = document.createElement('div')
      littleTitle.innerHTML = 'Void Light'
      littleTitle.setAttribute('id','littleTitle')
      historyTitle =document.createElement('h1')
      historyTitle.innerHTML='Histoire'
      historyTitle.setAttribute('id','historyTitle')
      historyText = document.createElement('div')
      historyText.innerHTML = 'En 2353, l’Homme qui a colonisé le système solaire pour répondre à un appétit croissant, doit de nouveau coloniser. L’histoire se centre sur le vaisseau Agatha, parti en exploration avec à son bord une centaine de colon. Vous, vous êtes le commandant de ce vaisseau dont vous devez assurer sa gestion, le sort et l’avenir de ces personnes dépend de vous.'
      historyText.setAttribute('id','historyText')
      continueButton = document.createElement('a')
      continueButton.innerHTML='Continuer >'
      continueButton.setAttribute('id','continueButton')
      continueButton.setAttribute('href','pages/game.html')

      //Injections des nouveaux elements
      main.appendChild(littleTitle)
      main.appendChild(historyTitle)
      main.appendChild(historyText)
      main.appendChild(continueButton)
    }
  )
}

// Fonction qui gere le pop up de support
function supportPage(){
  // Evenement qui gere la creation du popup support
  support.addEventListener(
    'click',
    function(e){
      //Mise le fond en opacité
      main.classList.add('opacity')
      nav.classList.add('opacity')

      // Changement du bouton selectionné dans la nav
      accueil.classList.remove('selected')
      support.classList.add('selected')

      // Creations des nouveaux elements
      form= document.createElement('form')
      form.setAttribute('action','index.html')
      form.setAttribute('method','post')
      form.setAttribute('id','contactform')
      formInput = document.createElement('input')
      formInput.setAttribute('type','text')
      formInput.setAttribute('name','subject')
      formInput.setAttribute('placeholder','Objet de la requête')
      formTextArea = document.createElement('textarea')
      formTextArea.setAttribute('name','description')
      formTextArea.innerHTML='Description de la requête'
      formSendButton=document.createElement('button')
      formSendButton.setAttribute('type','submit')
      formSendButton.innerHTML='Envoyer'
      supportTitle=document.createElement('div')
      supportTitle.innerHTML='Formulaire de Contact'
      supportTitle.classList.add('supportTitle')

      // Injections des nouveaux elements
      body.appendChild(form)
      form.appendChild(supportTitle)
      form.appendChild(formInput)
      form.appendChild(formTextArea)
      form.appendChild(formSendButton)

      // Evenement qui gere la fermeture du pop up
      formSendButton.addEventListener(
        'click',
        function(e){
          e.preventDefault()
          body.removeChild(form)
          // remise en place de l'opacité normale
          main.classList.remove('opacity')
          nav.classList.remove('opacity')
          // remise en place de la selection du bouton dans la nav
          support.classList.remove('selected')
          accueil.classList.add('selected')
        }
      )
    }
  )
}

// Fonction qui gere le pop up de login
function loginButtonEvent(){
  // Evenement qui gere la creation du pop up
  loginPreButton.addEventListener(
    'click',
    function(){
      // Changement de l'opacité
      main.classList.add('opacity')
      nav.classList.add('opacity')

      // Creations des elements
      loginDiv=document.createElement('div')
      loginDiv.setAttribute('id','loginDiv')
      loginForm=document.createElement('form')
      loginForm.setAttribute('action','login.html')
      loginForm.setAttribute('method','post')
      loginForm.setAttribute('id','login')
      user = document.createElement('input')
      user.setAttribute('type','text')
      user.setAttribute('name','user')
      user.setAttribute('placeholder','Identifiant')
      user.setAttribute('id','user')
      pass = document.createElement('input')
      pass.setAttribute('type','text')
      pass.setAttribute('name','pass')
      pass.setAttribute('placeholder','Mot De Passe')
      pass.setAttribute('id','pass')
      loginButton=document.createElement('img')
      loginButton.setAttribute('src','./images/lock.png')
      loginButton.setAttribute('alt','Bouton Pour Envoyer La demande de connexion')
      forgetUser  = document.createElement('div')
      forgetUser.classList.add('text')
      forgetUser.innerHTML='Mot De Passe Oublié ?'
      or = document.createElement('div')
      or.classList.add('text')
      or.innerHTML='ou'
      newUser = document.createElement('div')
      newUser.classList.add('text')
      newUser.innerHTML='Nouveau Voyageur'
      accueil.classList.remove('selected')

      // Injections des elements
      body.appendChild(loginDiv)
      loginDiv.appendChild(loginForm)
      loginForm.appendChild(user)
      loginForm.appendChild(pass)
      loginForm.appendChild(loginButton)
      loginForm.appendChild(forgetUser)
      loginForm.appendChild(or)
      loginForm.appendChild(newUser)

      // Evenements qui gere la fermeture du pop up
      loginButton.addEventListener(
        'click',
        function(){
          body.removeChild(loginDiv)
          // Remise en place de l'opacitée
          main.classList.remove('opacity')
          nav.classList.remove('opacity')
          // Remise en place de la selection dans la nav
          accueil.classList.add('selected')
        }
      )
    }
  )
}

// Fonction qui gere le pop up de nouveautées
function newsPage(){
  // Evenements qui gere la creation du pop up nouveautée
  nouveaute.addEventListener(
    'click',
    function(){
      // changement de l'opacité
      main.classList.add('opacity')
      nav.classList.add('opacity')
      // changement de la selection du bouton de nav
      accueil.classList.remove('selected')
      nouveaute.classList.add('selected')
      // Creations des elements
      divNewsContainer=document.createElement('div')
      divNewsContainer.classList.add('news')
      newsTitle = document.createElement('div')
      newsTitle.innerHTML='Nouveautées'
      newsTitle.classList.add('newsTitle')
      close = document.createElement('img')
      close.setAttribute('src','./images/close.png')
      close.setAttribute('id','close')
      close.setAttribute('alt','Bouton pour fermer la fenetre')
      firstDivNews = document.createElement('div')
      firstDivNews.classList.add('news1')
      firstDivNews.classList.add('left')
      firstImgNews = document.createElement('img')
      firstImgNews.classList.add('newsImgLeft')
      firstImgNews.setAttribute('src','./images/news1.png')
      firstImgNews.setAttribute('alt','Images des Nouveautées')
      firstVersionNews = document.createElement('h2')
      firstVersionNews.innerHTML='MAJ 2.0.6'
      firstDate = document.createElement('h3')
      firstDate.innerHTML='Avril 2018 :'
      firstDetail = document.createElement('p')
      firstDetail.innerHTML='- Ajout de nouveaux serveurs pour pouvoir vous accueillirs tous et supressions despremiers qui ne sont pas assez optimisé.<br>- Correction du glitch qui permettait de jouer à The Witcher 3 en modifiant le JS du jeu.<br>- Ajout du tableau de scores, vous permettant de voir si vous avez progréssé ou pas.<br> - Ajout des skins. Permet donc de pimper son vaiseau avec des skins gagné avec de l\'expérience, des codes sur les canettes coca, dans les loot-boxes...<br>- Pour les joueurs Alpha, ajout du multijoueur. En test, avat le déploiment prévu le mois prochain.'
      secondDivNews = document.createElement('div')
      secondDivNews.classList.add('news1')
      secondDivNews.classList.add('right')
      secondImgNews = document.createElement('img')
      secondImgNews.classList.add('newsImgRight')
      secondImgNews.setAttribute('src','./images/news2.png')
      firstImgNews.setAttribute('alt','Images des Nouveautées')
      secondVersionNews = document.createElement('h2')
      secondVersionNews.innerHTML='MAJ 2.0.5'
      secondDate = document.createElement('h3')
      secondDate.innerHTML='Mars 2018 :'
      secondDetail = document.createElement('p')
      secondDetail.innerHTML='- Ajout de serveurs suplémentaires.<br>- Changement au niveau du principe de dépenses de points. L\'ancien systéme est remplacé par une vrai monnaie : le Bitcoin.<br>- Diminution de de la vitesse de perte de points du Confort.<br>- Correction du bug qui affectait la valeur du nombre de colons qui une fois arrivé à 0, continuait de descendre en prenant des valeurs négatives.'
      thirdDivNews = document.createElement('div')
      thirdDivNews.classList.add('left')
      thirdDivNews.classList.add('news1')
      thirdImgNews = document.createElement('img')
      thirdImgNews.classList.add('newsImgLeft')
      thirdImgNews.setAttribute('src','./images/news3.png')
      thirdImgNews.setAttribute('alt','Images des Nouveautées')
      thirdVersionNews = document.createElement('h2')
      thirdVersionNews.innerHTML='MAJ 2.0.4'
      thirdDate = document.createElement('h3')
      thirdDate.innerHTML='Fevrier 2018 :'
      thirdDetail = document.createElement('p')
      thirdDetail.innerHTML='- Correction de nombreux bugs.<br>- Correction de problémes de sauvegarde.<br>- Ajout des "événements": Systéme qui ajoute des choix à réaliser et qui ont de lourdes conséquences'
      // injections des elements
      body.appendChild(divNewsContainer)
      divNewsContainer.appendChild(newsTitle)
      divNewsContainer.appendChild(close)
      divNewsContainer.appendChild(firstDivNews)
      divNewsContainer.appendChild(secondDivNews)
      divNewsContainer.appendChild(thirdDivNews)
      firstDivNews.appendChild(firstImgNews)
      firstDivNews.appendChild(firstVersionNews)
      firstDivNews.appendChild(firstDate)
      firstDivNews.appendChild(firstDetail)
      secondDivNews.appendChild(secondImgNews)
      secondDivNews.appendChild(secondVersionNews)
      secondDivNews.appendChild(secondDate)
      secondDivNews.appendChild(secondDetail)
      thirdDivNews.appendChild(thirdImgNews)
      thirdDivNews.appendChild(thirdVersionNews)
      thirdDivNews.appendChild(thirdDate)
      thirdDivNews.appendChild(thirdDetail)
      // Evenement qui gere la fermeture du pop up
      close.addEventListener(
        'click',
        function(){
          // suppresion des elements
          body.removeChild(divNewsContainer)
          // remise a zero de l'opacitée
          main.classList.remove('opacity')
          nav.classList.remove('opacity')
          // Remise a zero de la selection du bouton de nav
          accueil.classList.add('selected')
          nouveaute.classList.remove('selected')
        }
      )
    }
  )
}
