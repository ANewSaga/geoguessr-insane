(function(){
    let script = document.createElement("script");
    document.body.appendChild(script)
    script.innerText = `window.addEventListener('message', function(){let gamelayout = document.querySelector('.game-layout__canvas');let ans = Object.values(gamelayout)[0].memoizedProps.children[1].props.children.props.panorama.location.latLng;let gameguess = document.querySelector('.game-layout__guess-map');let ourMarket = Object.values(gameguess)[0].return.memoizedProps.children[4].props.children.props.onMarkerPlaced;ourMarket({lat: ans.lat(), lng: ans.lng() });    })`
    window.addEventListener('keydown', (e)=>{
        if (e.key == "g"){        postMessage("");    }
    })
})()
