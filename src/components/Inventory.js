import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeapon, plusGold } from '../features/player';
import { setItems } from '../features/items';
import { Energy } from '../features/player';
import { Health, Stamina } from '../features/player';
import { InventorySlots, Strength } from '../features/player';
import { Energy1 } from '../features/player';
import { Health1, Stamina1 } from '../features/player';
import { InventorySlots1, Strength1 } from '../features/player';
import { removeSoldItem } from '../features/items';

const Inventory = () => {
    const state = useSelector((state => state.player.value.player))
    const stateWeapon = useSelector((state => state.player.value.weapon))
    const itemsState = useSelector((state => state.items.value))
    const [getW, setW] = useState();
    const dispatch = useDispatch();
    const effects = {
        s1: {
            title: "Strength +1",
            effect: {
                strength: 1
            }
        },
        s2: {
            title: "Strength +2",
            effect: {
                strength: 2
            }
        },
        s3: {
            title: "Strength +3",
            effect: {
                strength: 3
            }
        },
        s4: {
            title: "Strength +4",
            effect: {
                strength: 4
            }
        },
        s5: {
            title: "Strength +5",
            effect: {
                strength: 5
            }
        },
        s6: {
            title: "Strength +6",
            effect: {
                strength: 6
            }
        },
        s7: {
            title: "Strength +7",
            effect: {
                strength: 7
            }
        },
        s8: {
            title: "Strength +8",
            effect: {
                strength: 8
            }
        },
        s9: {
            title: "Strength +9",
            effect: {
                strength: 9
            }
        },
        s10: {
            title: "Strength +10",
            effect: {
                strength: 10
            }
        },
        d1: {
            title: "Damage +1",
            effect: {
                damage: 1
            }
        },
        d2: {
            title: "Damage +2",
            effect: {
                damage: 2
            }
        },
        d3: {
            title: "Damage +3",
            effect: {
                damage: 3
            }
        },
        d4: {
            title: "Damage +4",
            effect: {
                damage: 4
            }
        },
        d5: {
            title: "Damage +5",
            effect: {
                damage: 5
            }
        },
        d6: {
            title: "Damage +6",
            effect: {
                damage: 6
            }
        },
        d7: {
            title: "Damage +7",
            effect: {
                damage: 7
            }
        },
        d8: {
            title: "Damage +8",
            effect: {
                damage: 8
            }
        },
        d9: {
            title: "Damage +9",
            effect: {
                damage: 9
            }
        },
        d10: {
            title: "Damage +10",
            effect: {
                damage: 10
            }
        },
        h1: {
            title: "Health +10",
            effect: {
                health: 10
            }
        },
        h2: {
            title: "Health +20",
            effect: {
                health: 10
            }
        },
        h3: {
            title: "Health +30",
            effect: {
                health: 30
            }
        },
        h4: {
            title: "Health +40",
            effect: {
                health: 40
            }
        },
        h5: {
            title: "Health +50",
            effect: {
                health: 50
            }
        },
        h6: {
            title: "Health +60",
            effect: {
                health: 60
            }
        },
        h7: {
            title: "Health +70",
            effect: {
                health: 70
            }
        },
        h8: {
            title: "Health +80",
            effect: {
                health: 80
            }
        },
        h9: {
            title: "Health +90",
            effect: {
                health: 90
            }
        },
        h10: {
            title: "Health +100",
            effect: {
                health: 100
            }
        },
        e1: {
            title: "Energy +10",
            effect: {
                energy: 10
            }
        },
        e2: {
            title: "Energy +20",
            effect: {
                energy: 20
            }
        },
        e3: {
            title: "Energy +30",
            effect: {
                energy: 30
            }
        },
        e4: {
            title: "Energy +40",
            effect: {
                energy: 40
            }
        },
        e5: {
            title: "Energy +50",
            effect: {
                energy: 50
            }
        },
        e6: {
            title: "Energy +60",
            effect: {
                energy: 60
            }
        },
        e7: {
            title: "Energy +70",
            effect: {
                energy: 70
            }
        },
        e8: {
            title: "Energy +80",
            effect: {
                energy: 80
            }
        },
        e9: {
            title: "Energy +90",
            effect: {
                energy: 90
            }
        },
        e10: {
            title: "Energy +100",
            effect: {
                energy: 100
            }
        },
        sta1: {
            title: "Stamina +1",
            effect: {
                stamina: 1
            }
        },
        sta2: {
            title: "Stamina +2",
            effect: {
                stamina: 2
            }
        },
        sta3: {
            title: "Stamina +3",
            effect: {
                stamina: 3
            }
        },
        sta4: {
            title: "Stamina +4",
            effect: {
                stamina: 4
            }
        },
        sta5: {
            title: "Stamina +5",
            effect: {
                stamina: 5
            }
        },
        sta6: {
            title: "Stamina +6",
            effect: {
                stamina: 6
            }
        },
        sta7: {
            title: "Stamina +7",
            effect: {
                stamina: 7
            }
        },
        sta8: {
            title: "Stamina +8",
            effect: {
                stamina: 8
            }
        },
        sta9: {
            title: "Stamina +9",
            effect: {
                stamina: 9
            }
        },
        sta10: {
            title: "Stamina +10",
            effect: {
                stamina: 10
            }
        },
        str1: {
            title: "Strength +1",
            effect: {
                strength: 1
            }
        },
        str2: {
            title: "Strength +2",
            effect: {
                strength: 2
            }
        },
        str3: {
            title: "Strength +3",
            effect: {
                strength: 3
            }
        },
        str4: {
            title: "Strength +4",
            effect: {
                strength: 4
            }
        },
        str5: {
            title: "Strength +5",
            effect: {
                strength: 5
            }
        },
        str6: {
            title: "Strength +6",
            effect: {
                strength: 6
            }
        },
        str7: {
            title: "Strength +7",
            effect: {
                strength: 7
            }
        },
        str8: {
            title: "Strength +8",
            effect: {
                strength: 8
            }
        },
        str9: {
            title: "Strength +9",
            effect: {
                strength: 9
            }
        },
        str10: {
            title: "Strength +10",
            effect: {
                strength: 10
            }
        },
        i1: {
            title: "Inventory slots +1",
            effect: {
                inventorySlots: 1
            }
        },
        i2: {
            title: "Inventory slots +2",
            effect: {
                inventorySlots: 2
            }
        },
        i3: {
            title: "Inventory slots +3",
            effect: {
                inventorySlots: 3
            }
        },
        i4: {
            title: "Inventory slots +4",
            effect: {
                inventorySlots: 4
            }
        },
        i5: {
            title: "Inventory slots +5",
            effect: {
                inventorySlots: 5
            }
        },
        i6: {
            title: "Inventory slots +6",
            effect: {
                inventorySlots: 6
            }
        },
        i7: {
            title: "Inventory slots +7",
            effect: {
                inventorySlots: 7
            }
        },
        i8: {
            title: "Inventory slots +8",
            effect: {
                inventorySlots: 8
            }
        },
        i9: {
            title: "Inventory slots +9",
            effect: {
                inventorySlots: 9
            }
        },
        i10: {
            title: "Inventory slots +10",
            effect: {
                inventorySlots: 10
            }
        }

    }
    const runCallback = (cb) => {
        return cb();
    };


    function chooseWeapon(weapon, index) {
        if (Object.keys(weapon).includes("maxDamage")) {
            if (stateWeapon !== null) {
                const tempValue = stateWeapon;
                dispatch(setWeapon(weapon));
                dispatch(removeSoldItem(index));
                dispatch(setItems(tempValue));
                updateAllStatsRemove(tempValue);
            } else {
                dispatch(setWeapon(weapon));
                dispatch(removeSoldItem(index));
            }
            updateAllStats(weapon);
        }
    }

    function updateAllStats(weapon) {
        weapon.effects.map(x => {
            const statsToUpdate0 = Object.keys(x.effect);
            String(statsToUpdate0);
            const statsToUpdate = statsToUpdate0[0].charAt(0).toUpperCase() + statsToUpdate0[0].slice(1);
            if (statsToUpdate === "Health") dispatch(Health(x.effect.health))
            if (statsToUpdate === "Strength") dispatch(Strength(x.effect.strength))
            if (statsToUpdate === "Stamina") dispatch(Stamina(x.effect.stamina))
            if (statsToUpdate === "Energy") dispatch(Energy(x.effect.energy))
            if (statsToUpdate === "InventorySlots") dispatch(InventorySlots(x.effect.inventorySlots))
        })
    }

    function updateAllStatsRemove(weapon) {
        weapon.effects.map(x => {
            const statsToUpdate0 = Object.keys(x.effect);
            String(statsToUpdate0);
            const statsToUpdate = statsToUpdate0[0].charAt(0).toUpperCase() + statsToUpdate0[0].slice(1);
            if (statsToUpdate === "Health") dispatch(Health1(x.effect.health))
            if (statsToUpdate === "Strength") dispatch(Strength1(x.effect.strength))
            if (statsToUpdate === "Stamina") dispatch(Stamina1(x.effect.stamina))
            if (statsToUpdate === "Energy") dispatch(Energy1(x.effect.energy))
            if (statsToUpdate === "InventorySlots") dispatch(InventorySlots1(x.effect.inventorySlots))
        })
    }

    function sellItem(item, index) {
        //title or maxDamage
        if (Object.keys(item).includes("maxDamage") || Object.keys(item).includes("title")) {
            dispatch(plusGold(item.price / 2));
        } else {
            dispatch(plusGold(item.price));
        }
        dispatch(removeSoldItem(index));
    }

    return (
        <div className='inventory'  >
            <h2 className='text-center'>Inventory</h2>
            <h3>Gold: {state.gold}</h3>
            <div className='d-flex'>
                {
                    runCallback(() => {
                        const row = [];
                        for (let i = 0; i < state.inventorySlots; i++) {
                            row.push(<div key={i} className='smallBox2'>
                                {window.location.hash === "#/shop" ? !!itemsState[i] && <div> <img src={itemsState[i].image} alt="" />
                                    <button onClick={() => sellItem(itemsState[i], i)} className='btn'>Sell</button></div> :
                                    !!itemsState[i] && <div>
                                        <img onClick={() => chooseWeapon(itemsState[i], i)} src={itemsState[i].image} alt="" />
                                        {Object.keys(itemsState[i]).includes("maxDamage") && <div>
                                            <h6>Max damage: {itemsState[i].maxDamage}</h6>
                                            <h6>Energy per hint: {itemsState[i].energyPerHit}</h6>
                                            <h6><div className='d-flex wrap'>Effects: {itemsState[i].effects.length > 0 ? itemsState[i].effects.map((y, i) => <div key={i}>{y.title}</div>) : "none"} </div></h6>
                                        </div>}
                                        {Object.keys(itemsState[i]).includes("title") && <div>
                                            <h6>Effect: {itemsState[i].title.includes("Energy") ? <div><p>Energy:</p>{itemsState[i].effect.energy}</div> : <div><p>Health:</p>{itemsState[i].effect.health}</div>}</h6>
                                        </div>}
                                    </div>}
                            </div>)
                        }
                        return row;
                    })
                }
            </div>
        </div>
    );
};

export default Inventory;