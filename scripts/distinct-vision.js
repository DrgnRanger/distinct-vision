
/** Does things when the game has started */
Hooks.on("init", function() {
    
    //Sets up the inaudible status effect
    CONFIG.statusEffects.push({
        id: "hiddenOne",
        name: "Z1 Hidden Group One",
        img: "modules/distinct-vision/icons/hiddengroup.png",
        _id: dnd5e.utils.staticID("dnd5ehiddenone"),
    });

    CONFIG.statusEffects.push({
        id: "hiddenTwo",
        name: "Z2 Hidden Group Two",
        img: "modules/distinct-vision/icons/hiddengroup.png",
        _id: dnd5e.utils.staticID("dnd5ehiddentwo"),
    });

    CONFIG.statusEffects.push({
        id: "hiddenThree",
        name: "Z3 Hidden Group Three",
        img: "modules/distinct-vision/icons/hiddengroup.png",
        _id: dnd5e.utils.staticID("dnd5ehiddenThree"),
    });

    CONFIG.statusEffects.push({
        id: "hiddenFour",
        name: "Z4 Hidden Group Four",
        img: "modules/distinct-vision/icons/hiddengroup.png",
        _id: dnd5e.utils.staticID("dnd5ehiddenfour"),
    });

    CONFIG.statusEffects.push({
        id: "hiddenFive",
        name: "Z5 Hidden Group Five",
        img: "modules/distinct-vision/icons/hiddengroup.png",
        _id: dnd5e.utils.staticID("dnd5ehiddenfive"),
    });

    CONFIG.statusEffects.push({
        id: "hiddenSix",
        name: "Z6 Hidden Group Six",
        img: "modules/distinct-vision/icons/hiddengroup.png",
        _id: dnd5e.utils.staticID("dnd5ehiddensix"),
    });

    CONFIG.specialStatusEffects.HIDDENONE = "hiddenOne"
    CONFIG.specialStatusEffects.HIDDENTWO = "hiddenTwo"
    CONFIG.specialStatusEffects.HIDDENTHREE = "hiddenThree"
    CONFIG.specialStatusEffects.HIDDENFOUR = "hiddenFour"
    CONFIG.specialStatusEffects.HIDDENFIVE = "hiddenFive"
    CONFIG.specialStatusEffects.HIDDENSIX = "hiddenSix"

});

//Does things when the game is ready
Hooks.on("ready", function() {
    CONFIG.Canvas.detectionModes.lightPerception = new class DetectionModeLightPerception extends (foundry.canvas?.perception?.DetectionMode ?? DetectionMode) {
        constructor() {
            super({
                id: "lightPerception",
                label: "DETECTION.LightPerception",
                type: DetectionMode.DETECTION_TYPES.SIGHT,
                priority: 8,
            });
        }
    
        /** @override */
        _canDetect(visionSource, target) {
            const source = visionSource.object;

            if ( !(target instanceof Token)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENONE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENTWO)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENTHREE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENFOUR)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENFIVE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENSIX) ) return false;
                
    
            return true;
        }
    
    }
    
    CONFIG.Canvas.detectionModes.tremorsense = new class DetectionModeTremorsense extends (foundry.canvas?.perception?.DetectionMode ?? DetectionMode) {
        constructor() {
            super({
                id: "feelTremor",
                label: "DND5E.SenseTremorsense",
                type: DetectionMode.DETECTION_TYPES.MOVE,
                walls: false,
                angle: false,
                imprecise: true,
                priority: 3,
            });
        }
    
        /** @override */
        _canDetect(visionSource, target) {
            const source = visionSource.object;
             
            if ( !(target instanceof Token)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENONE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENTWO)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENTHREE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENFOUR)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENFIVE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENSIX) ) return false;
    
    
            return true;
        }
    }
    
    CONFIG.Canvas.detectionModes.blindsight = new class DetectionModeBlindsight extends (foundry.canvas?.perception?.DetectionMode ?? DetectionMode) {
        constructor() {
            super({
                id: "blindsight",
                label: "DND5E.SenseBlindsight",
                type: DetectionMode.DETECTION_TYPES.SIGHT,
                priority: 4,
            });
        }
    
        /** @override */
        _canDetect(visionSource, target) {
            const source = visionSource.object;      
             
            if ( !(target instanceof Token)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENONE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENTWO)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENTHREE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENFOUR)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENFIVE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENSIX) ) return false;
            
    
            return true;
        }
    
    }
    
    CONFIG.Canvas.detectionModes.darkvision = new class DetectionModeDarkvision extends (foundry.canvas?.perception?.DetectionMode ?? DetectionMode) {
        constructor() {
            super({
                id: "darkvision",
                label: "DND5E.SenseDarkvision",
                type: DetectionMode.DETECTION_TYPES.SIGHT,
                priority: 7,
            });
        }
        
        /** @override */
        _canDetect(visionSource, target) {
            const source = visionSource.object;
            
            if ( !(target instanceof Token)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENONE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENTWO)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENTHREE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENFOUR)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENFIVE)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENSIX) ) return false;
                
            return true;
        }
    
    }
    
    CONFIG.Canvas.detectionModes.hiddenOneSight = new class DetectionModeHiddenOne extends (foundry.canvas?.perception?.DetectionMode ?? DetectionMode) {
        constructor() {
            super({
                id: "hiddenOneSight",
                label: "See Group One",
                type: DetectionMode.DETECTION_TYPES.SIGHT,
                priority: 10,
            });
        }
    
        /** @override */
        _canDetect(visionSource, target) {
            const source = visionSource.object;

            if ( !(target instanceof Token)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENONE) ) return true;
    
            return false;
        }
    
    }
    
    CONFIG.Canvas.detectionModes.hiddenTwoSight = new class DetectionModeHiddenTwo extends (foundry.canvas?.perception?.DetectionMode ?? DetectionMode) {
        constructor() {
            super({
                id: "hiddenTwoSight",
                label: "See Group Two",
                type: DetectionMode.DETECTION_TYPES.SIGHT,
                priority: 10,
            });
        }
    
        /** @override */
        _canDetect(visionSource, target) {
            const source = visionSource.object;
            
            if ( !(target instanceof Token)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENTWO) ) return true;
    
    
            return false;
        }
    
    }
    
    CONFIG.Canvas.detectionModes.hiddenThreeSight = new class DetectionModeHiddenThree extends (foundry.canvas?.perception?.DetectionMode ?? DetectionMode) {
        constructor() {
            super({
                id: "hiddenThreeSight",
                label: "See Group Three",
                type: DetectionMode.DETECTION_TYPES.SIGHT,
                priority: 10,
            });
        }
    
        /** @override */
        _canDetect(visionSource, target) {
            const source = visionSource.object;
            
            if ( !(target instanceof Token)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENTHREE) ) return true;
    
            return false;
        }
    
    }
    
    CONFIG.Canvas.detectionModes.hiddenFourSight = new class DetectionModeHiddenFour extends (foundry.canvas?.perception?.DetectionMode ?? DetectionMode) {
        constructor() {
            super({
                id: "hiddenFourSight",
                label: "See Group Four",
                type: DetectionMode.DETECTION_TYPES.SIGHT,
                priority: 10,
            });
        }
    
        /** @override */
        _canDetect(visionSource, target) {
            const source = visionSource.object;
    
            if ( !(target instanceof Token)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENFOUR) ) return true;
    
            return false;
        }
    
    }
    
    CONFIG.Canvas.detectionModes.hiddenFiveSight = new class DetectionModeHiddenFive extends (foundry.canvas?.perception?.DetectionMode ?? DetectionMode) {
        constructor() {
            super({
                id: "hiddenFiveSight",
                label: "See Group Five",
                type: DetectionMode.DETECTION_TYPES.SIGHT,
                priority: 10,
            });
        }
    
        /** @override */
        _canDetect(visionSource, target) {
            const source = visionSource.object;
    
            if ( !(target instanceof Token)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENFIVE) ) return true;
    
            return false;
        }
    
    }
    
    CONFIG.Canvas.detectionModes.hiddenSixSight = new class DetectionModeHiddenSix extends (foundry.canvas?.perception?.DetectionMode ?? DetectionMode) {
        constructor() {
            super({
                id: "hiddenSixSight",
                label: "See Group Six",
                type: DetectionMode.DETECTION_TYPES.SIGHT,
                priority: 10,
            });
        }
    
        /** @override */
        _canDetect(visionSource, target) {
            const source = visionSource.object;
    
            if ( !(target instanceof Token)
                || target.document.hasStatusEffect(CONFIG.specialStatusEffects.HIDDENSIX) ) return true;
    
            return false;
        }
    
    }
    

  });

Hooks.on("refreshToken", (token) => {
    if (canvas.tokens.highlightObjects) return;
    
    for (const fx of token.effects.children) {
        if (fx === token.effects.overlay) continue; // Skip base overlay
       
        for (x of token.actor.appliedEffects) {
            console.log(x)
            if (x.name == "Z1 Hidden Group One"
                || x.name == "Z2 Hidden Group Two"
                || x.name == "Z3 Hidden Group Three"
                || x.name == "Z4 Hidden Group Four"
                || x.name == "Z5 Hidden Group Five"
                || x.name == "Z6 Hidden Group Six"
            ) fx.visible = false;
        }
    }  
  });