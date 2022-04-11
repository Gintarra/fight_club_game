import React, { useEffect, useState } from 'react';
import EnemyArea from './EnemyArea';
import PlayerArea from './PlayerArea';
import { setMonster } from '../../features/monster';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DroppedItems from './DroppedItems';
import { setDrink } from '../../features/player';

const Arena = () => {
    const monsters = [
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b1/Basilisk.png",
            name: "Basilisk",
            maxDamage: 5,
            health: 100,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/75/VampireBat.png",
            name: "Bat",
            maxDamage: 8,
            health: 80,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/a4/Bear.png",
            name: "Bear",
            maxDamage: 20,
            health: 150,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/60/Beetle.png",
            name: "Beetle",
            maxDamage: 3,
            health: 300,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6f/Boar.png",
            name: "Boar",
            maxDamage: 7,
            health: 85,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/01/Vulture.png",
            name: "Carrion bird",
            maxDamage: 6,
            health: 170,
            maxItemsDrop: 1
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Chimera.png",
            name: "Chimaera",
            maxDamage: 12,
            health: 190,
            maxItemsDrop: 2
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/33/Clefthoof.png",
            name: "Clefthoof",
            maxDamage: 50,
            health: 500,
            maxItemsDrop: 4
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/63/Crab.png",
            name: "Crab",
            maxDamage: 8,
            health: 120,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/4/46/Crocolisk.png",
            name: "Crocolisk",
            maxDamage: 38,
            health: 420,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Devilsaur.png",
            name: "Devilsaur",
            maxDamage: 25,
            health: 250,
            maxItemsDrop: 3
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/6c/Diemetradon.png",
            name: "Diemetradon",
            maxDamage: 12,
            health: 90,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/34/Dragonhawk1.png",
            name: "Dragonhawk",
            maxDamage: 120,
            health: 20,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/03/Elekk.png",
            name: "Elekk",
            maxDamage: 34,
            health: 160,
            maxItemsDrop: 4

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/7/73/Fox.png",
            name: "Fox",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/2f/Gryphon.png",
            name: "Gryphon",
            maxDamage: 18,
            health: 350,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/84/Gorilla.png",
            name: "Gorilla",
            maxDamage: 30,
            health: 240,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c3/Horse.png",
            name: "Horse",
            maxDamage: 3,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9d/Hydra.png",
            name: "Hydra",
            maxDamage: 40,
            health: 500,
            maxItemsDrop: 5
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/ee/HyenaBlue.png",
            name: "Hyena",
            maxDamage: 9,
            health: 120,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e5/Cat_lion.png",
            name: "Lion",
            maxDamage: 13,
            health: 200,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/b8/Lynx.png",
            name: "Lynx",
            maxDamage: 12,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/9/9c/Mastiff.png",
            name: "Mastiff",
            maxDamage: 7,
            health: 80,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/2/27/Monkey.png",
            name: "Monkey",
            maxDamage: 4,
            health: 300,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/0/08/Netherray.png",
            name: "Nether ray",
            maxDamage: 6,
            health: 120,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/b/be/OwlWhite.png",
            name: "Owl",
            maxDamage: 7,
            health: 70,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/36/Panther.png",
            name: "Panther",
            maxDamage: 19,
            health: 40,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/16/Parrot.png",
            name: "Parrot",
            maxDamage: 2,
            health: 30,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/6/66/Raven.png",
            name: "Raven",
            maxDamage: 8,
            health: 150,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/c/c2/Rhino.png",
            name: "Rhinoceros",
            maxDamage: 120,
            health: 1500,
            maxItemsDrop: 8
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/a/ab/Scorpion.png",
            name: "Scorpid",
            maxDamage: 25,
            health: 300,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/1a/Sea_Snake.png",
            name: "Sea snake",
            maxDamage: 5,
            health: 50,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/8/89/Serpent.png",
            name: "Serpent",
            maxDamage: 12,
            health: 80,
            maxItemsDrop: 1

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/14/Shark.png",
            name: "Shark",
            maxDamage: 15,
            health: 210,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/5/51/Sporebat.png",
            name: "Spore bat",
            maxDamage: 9,
            health: 150
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/10/Stag.png",
            name: "Stag",
            maxDamage: 4,
            health: 200,
            maxItemsDrop: 2

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/1/12/Strider.png",
            name: "Tallstrider",
            maxDamage: 20,
            health: 80
        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/3/3c/Threshadon.png",
            name: "Threshadon",
            maxDamage: 70,
            health: 800,
            maxItemsDrop: 3

        },
        {
            image: "https://static.wikia.nocookie.net/wowwiki/images/e/e9/Turtle.png",
            name: "Turtle",
            maxDamage: 5,
            health: 5000,
            maxItemsDrop: 10
        }
    ]

    const dispatch = useDispatch();
    const stateMonster = useSelector((state) => state.monster.value);
    const state = useSelector((state => state.player.value.player));
    const stateWeapon = useSelector((state => state.player.value.weapon));
    const stateToDrink = useSelector((state => state.player.value.potion));

    const navigate = useNavigate();

    const [getEnergyP, setEnergyP] = useState(100);
    const [getHealthP, setHealthP] = useState(0);
    const [getHealthE, setHealthE] = useState(0);
    const [getEnergyPValue, setEnergyPValue] = useState(state.energy);
    const [getHealthPValue, setHealthPValue] = useState(state.health);
    const [getWinner, setWinner] = useState("");
    const [getStatus, setStatus] = useState(0);
    const [getError, setError] = useState(false);



    useEffect(() => {
        //potions energy gydymas
        if (stateToDrink !== null) {
            if (stateToDrink.title.includes("Energy")) {
                const newVar = getEnergyPValue;
                if ((stateToDrink.effect.energy + newVar) > state.energy) {
                    setEnergyP(100);
                    setEnergyPValue(state.energy);
                } else {
                    const eP = ((stateToDrink.effect.energy + newVar) * 100 / state.energy);
                    setEnergyPValue(stateToDrink.effect.energy + newVar);
                    setEnergyP(eP);
                }
                dispatch(setDrink(null));
            }
        }
        //potions health gydymas
        if (stateToDrink !== null) {
            if (stateToDrink.title.includes("Health")) {
                const newVar2 = getHealthP;
                const newVarAllHealth = ((100 - newVar2) * state.health) / 100;
                if ((stateToDrink.effect.health + newVarAllHealth) > state.health) {
                    setHealthP(0);
                    setHealthPValue(state.health);
                } else {
                    const hP = ((stateToDrink.effect.health + newVarAllHealth) * 100 / state.health);
                    setHealthPValue(stateToDrink.effect.energy + newVarAllHealth);
                    setHealthP(100 - hP);
                }
                dispatch(setDrink(null));
            }
        }
    }, [stateToDrink])


    function findEnemy(i) {
        const randomNum = Math.round(Math.random() * monsters.length - 2);
        dispatch(setMonster(monsters[randomNum]))
        setStatus(i);
        setHealthE(0);
    }

    function attack() {
        let hE = 0;
        let eP = 0;
        let energyOfPlayer = 0;
        //player hit
        //smugis absoliuciu skaicium viso (newArr)
        hE = state.damage + randomNumber(stateWeapon.maxDamage);
        //critical hit probability
        const randNum = Math.floor(Math.random() * 101);
        if (randNum <= state.strength) {
            hE = 3 * hE;
            alert("critical hit");
        }

        const newArr = Math.round((hE * 100 / stateMonster.health));

        if (getEnergyPValue >= stateWeapon.energyPerHit) {
            setError(false);
            if ((getHealthE + newArr) >= 100) {
                alert("you won")
                setHealthE(100);
                setWinner("player");
                setStatus(2);
                return;
                //ismeta itemus
            } else {
                setHealthE(getHealthE + newArr);
                eP = 100 - (stateWeapon.energyPerHit * 100 / state.energy);
                energyOfPlayer = getEnergyPValue - stateWeapon.energyPerHit;
                setEnergyP(getEnergyP + eP);
                setEnergyPValue(getEnergyPValue - stateWeapon.energyPerHit);
            }

        } else {
            // automatiskai praleidzia
            setError(true);
            energyOfPlayer = getEnergyPValue;
        }
        //monster hit
        monsterAttack(energyOfPlayer);
    }

    function monsterAttack(energyOfPlayer) {
        let hP = 0;
        hP = randomNumber(stateMonster.maxDamage);
        const newArr = Math.round((hP * 100 / state.health));
        if ((getHealthP + newArr) >= 100) {
            alert("monster won")
            setHealthP(100);
            setEnergyP(getEnergyP);
            setWinner("enemy");
            return;
        } else {
            setHealthP(getHealthP + newArr);
            //po prieso atakos zaidejui prisideda energijos
            if (state.energy > (energyOfPlayer + state.stamina)) {
                setEnergyP(((energyOfPlayer + state.stamina) * 100 / state.energy));
                setEnergyPValue(energyOfPlayer + state.stamina);
                energyOfPlayer += state.stamina;
            } else {
                setEnergyPValue(state.energy);
                setEnergyP(100)
            }
        }
    }

    function randomNumber(num) {
        return Math.round(Math.random() * num)
    }
    function navigateToHome() {
        navigate('/main');
    }
    function newGame() {
        navigate('/');
        window.location.reload(false);
    }

    return (
        <div>
            {getWinner === "enemy" ? <div className="monsterWon d-flex justify-center align-center column mt-40">
                <p>Game Over</p>
                <button className='monsterWonBtn mt-40' onClick={newGame}>New Game</button>
            </div>
                : <div className='d-flex align-center'>
                    <div className='grow2'>
                        <PlayerArea data={getHealthP} data2={getEnergyP} />
                    </div>
                    <div className='grow1 d-flex justify-center column align-center'>
                        {getStatus === 0 && <button onClick={() => findEnemy(1)} className='arenaBtn'>Find enemy</button>}
                        {getStatus === 1 && <button onClick={attack} className='arenaBtn'>Attack</button>}
                        {getError && <div><h5>You don't have enough energy, you skipped attack</h5></div>}
                        {getStatus === 2 &&
                            <div className='d-flex justify-center column align-center' style={{ width: "350px" }}>
                                <div>
                                    <button onClick={navigateToHome} className='arenaBtn' style={{ width: "150px" }}>Go home</button>
                                </div>
                                <div>
                                    <button onClick={() => findEnemy(1)} className='arenaBtn mt-40' style={{ width: "150px" }}>New enemy</button>
                                </div>
                            </div>}

                    </div>
                    <div className='grow2'>
                        {getStatus === 1 && <EnemyArea data={getHealthE} />}
                        {getStatus === 2 && <DroppedItems />}
                    </div>

                </div>}
        </div>
    );
};

export default Arena;