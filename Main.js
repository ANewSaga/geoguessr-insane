(function(){
    let script = document.createElement("script");
    document.body.appendChild(script)
    console.log(location.pathname.split('/').filter(e=>e!='')[0])
    if (location.pathname.split('/').filter(e=>e!='')[0] == "battle-royale"){
        script.innerText = `window.addEventListener('message', function(){let ans = Object.values(document.querySelector('.game_hud__h3YxY'))[0]; ans = ans.memoizedProps.children[0].props.panoramaRef.position;let guessMap = Object.values(document.querySelector('.game_guessMap__Z_XRA'))[0];guessMap.memoizedProps.children.props.onMarkerPlaced({lat: ans.lat(), lng: ans.lng() });   })`
    }else if (location.pathname.split('/').filter(e=>e!='')[0] == "party"){
        script.innerText = `window.addEventListener('message', function(){let ez = document.querySelector(".game_hints__18Eka");  ez = Object.values(ez)[0].return.pendingProps.game.rounds.at(-1).answer.coordinateAnswerPayload.coordinate;let guessMap = Object.values(document.querySelector('.panorama-question_layout__wSP7g'))[0];guessMap.return.memoizedProps.children.props.placeMarker(ez);   })`
    }else{
        script.innerText = `window.addEventListener('message', function(){let gamelayout = document.querySelector('.game-layout__canvas');let ans = Object.values(gamelayout)[0].memoizedProps.children[1].props.children.props.panorama.location.latLng;let gameguess = document.querySelector('.game-layout__guess-map');let ourMarket = Object.values(gameguess)[0].return.memoizedProps.children[4].props.children.props.onMarkerPlaced;ourMarket({lat: ans.lat(), lng: ans.lng() });    })`
    }
    window.addEventListener('keydown', (e)=>{
        if (e.key == "g"){        postMessage("");    }
    })
})()
