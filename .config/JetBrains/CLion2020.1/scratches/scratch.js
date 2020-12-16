(function () {
    function log(x) {
        console.log(x);
    }

    var team1 = `Rostov`;
    var team2 = `CSKA Moscow`;
    let k = 0;
    let nl_prts = document.querySelectorAll('.ipe-ScoreGridCell_TextTeamName,.ipe-SoccerGridColumn_TeamName .ipe-SoccerGridCell,.ipe-ScoreGridHeaderLayout .ipe-ScoreGridCell_TextTeamName,.ipe-TennisHeaderLayout .ipe-TennisHeaderLayout_TextTeamName,.ipe-TwoTeamGenericLayout_NameInner');
    let prts = Array.prototype.slice.call(nl_prts, 0);
    prts.some(p = > {
        if(p.textContent === team1 || p.textContent === team2
)
    k++;
    if (k === 2) return true
})
    ;
    if (k != 2) return false;

    function calcVals(arra) {
        let rg = /([+-]?.+),([+-]?.+)/;
        let vals = arra.map(function (e) {
            let t = e.textContent.match(rg);
            if (t && t.length === 3) return {
                val: parseFloat(t[1]),
                val2: parseFloat(t[2])
            };
            else if (!t) {
                return {
                    val: parseFloat(e.textContent)
                }
            }
        });
        return vals
    }

    let i = 0;
    const SportType = {
        SPORT_UNKNOWN: i++,
        TENNIS: i++,
        BASKETBALL: i++,
        SOCCER: i++,
        ESPORTS: i++
    };

    i = 0;
    const GeneralBetType = {
        GeneralBetType_UNKNOWN: i++,
        MONEYLINE: i++,
        SPREAD: i++,
        TOTAL_POINTS: i++,
        TEAM_TOTAL_POINTS: i++
    };

    const SpecialBetType = {
        SpecialBetType_UNKNOWN: 0,
        MONEYLINE_SPECIAL: 1,
        TOTAL_OVER: 2,
        TOTAL_UNDER: 4,
        TOTAL_EXACTLY: 8,
        HANDICAP_PLUS: 16,
        HANDICAP_MINUS: 32,
        HANDICAP_TIE: 64
    };

    i = 0;
    const SpecialCategory_tennis = {
        SpecialCategory_UNKNOWN: i++,
        MATCH_WINNER_2WAY_TENNIS: i++,
        SET1_WINNER_TENNIS: i++,
        SET2_WINNER_TENNIS: i++,
        SET3_WINNER_TENNIS: i++,
        SET4_WINNER_TENNIS: i++,
        GAME_WINNER_2WAY_TENNIS: i++,
        TOTAL_GAMES_IN_MATCH_TENNIS: i++,
        ALTERNATIVE_TOTAL_GAMES_IN_MATCH_TENNIS: i++,
        TOTAL_GAMES_HANDICAP_2WAY_TENNIS: i++,
        ALTERNATIVE_TOTAL_GAMES_HANDICAP_2WAY_TENNIS: i++,
        HANDICAP_2WAY_TENNIS: i++,
        ALTERNATIVE_HANDICAP_2WAY_TENNIS: i++,
        HANDICAP_3WAY_TENNIS: i++,
        ALTERNATIVE_HANDICAP_3WAY_TENNIS: i++,
        SET1_HANDICAP_TENNIS: i++,
        SET2_HANDICAP_TENNIS: i++,
        SET3_HANDICAP_TENNIS: i++,
        SET4_HANDICAP_TENNIS: i++,
        TOTAL_GAMES_IN_SET1_TENNIS: i++,
        TOTAL_GAMES_IN_SET2_TENNIS: i++,
        TOTAL_GAMES_IN_SET3_TENNIS: i++,
        TOTAL_GAMES_IN_SET4_TENNIS: i++
    };

    i = 0;
    const SpecialCategory_basketball = {
        FIRST_QUARTER_WINNER_2WAY_BASKETBALL: i++,
        FIRST_QUARTER_TOTAL_2WAY_BASKETBALL: i++,
        FIRST_QUARTER_HANDICAP_2WAY_BASKETBALL: i++,
        SECOND_QUARTER_WINNER_2WAY_BASKETBALL: i++,
        SECOND_QUARTER_TOTAL_2WAY_BASKETBALL: i++,
        SECOND_QUARTER_HANDICAP_2WAY_BASKETBALL: i++,
        THIRD_QUARTER_WINNER_2WAY_BASKETBALL: i++,
        THIRD_QUARTER_TOTAL_2WAY_BASKETBALL: i++,
        THIRD_QUARTER_HANDICAP_2WAY_BASKETBALL: i++,
        FOURTH_QUARTER_WINNER_2WAY_BASKETBALL: i++,
        FOURTH_QUARTER_TOTAL_2WAY_BASKETBALL: i++,
        FOURTH_QUARTER_HANDICAP_2WAY_BASKETBALL: i++,
        TO_WIN_MATCH_2WAY_BASKETBALL: i++,
        TOTAL_2WAY_BASKETBALL: i++,
        FIRST_HALF_TOTAL_2WAY_BASKETBALL: i++,
        SECOND_HALF_TOTAL_2WAY_BASKETBALL: i++,
        ALTERNATIVE_TOTAL_2WAY_BASKETBALL: i++,
        HANDICAP_2WAY_BASKETBALL: i++,
        ALTERNATIVE_HANDICAP_2WAY_BASKETBALL: i++,
        FIRST_HALF_HANDICAP_2WAY_BASKETBALL: i++,
        SECOND_HALF_HANDICAP_2WAY_BASKETBALL: i++,
        FIRST_HALF_WINNER_2WAY_BASKETBALL: i++,
        SECOND_HALF_WINNER_2WAY_BASKETBALL: i++,
        TEAM_TOTALS_2WAY_BASKETBALL: i++,
        ALTERNATIVE_TEAM_TOTALS_2WAY_BASKETBALL: i++,
        FIRST_HALF_TEAM_TOTALS_2WAY_BASKETBALL: i++,
        SECOND_HALF_TEAM_TOTALS_2WAY_BASKETBALL: i++
    };

    i = 0;
    const SpecialCategory_soccer = {
        ASIAN_CORNERS_SOCCER: i++,
        ALTERNATIVE_ASIAN_CORNERS_SOCCER: i++,
        FIRST_HALF_ASIAN_CORNERS_SOCCER: i++,
        SECOND_HALF_ASIAN_CORNERS_SOCCER: i++,
        ALTERNATIVE_FIRST_HALF_ASIAN_CORNERS_SOCCER: i++,
        ALTERNATIVE_SECOND_HALF_ASIAN_CORNERS_SOCCER: i++,
        TOTAL_CORNERS_3WAY_SOCCER: i++,
        ALTERNATIVE_TOTAL_CORNERS_3WAY_SOCCER: i++,
        FIRST_HALF_CORNERS_3WAY_SOCCER: i++,
        ALTERNATIVE_FIRST_HALF_CORNERS_3WAY_SOCCER: i++,
        SECOND_HALF_CORNERS_3WAY_SOCCER: i++,
        ALTERNATIVE_SECOND_HALF_CORNERS_3WAY_SOCCER: i++,
        MATCH_GOALS_2WAY_SOCCER: i++,
        ALTERNATIVE_MATCH_GOALS_2WAY_SOCCER: i++,
        FIRST_HALF_GOALS_2WAY_SOCCER: i++,
        SECOND_HALF_GOALS_2WAY_SOCCER: i++,
        ASIAN_HANDICAP_SOCCER: i++,
        ALTERNATIVE_ASIAN_HANDICAP_SOCCER: i++,
        FIRST_HALF_ASIAN_HANDICAP_SOCCER: i++,
        ALTERNATIVE_FIRST_HALF_ASIAN_HANDICAP_SOCCER: i++,
        SECOND_HALF_ASIAN_HANDICAP_SOCCER: i++,
        ALTERNATIVE_SECOND_HALF_ASIAN_HANDICAP_SOCCER: i++,
        HANDICAP_3WAY_SOCCER: i++,
        FIRST_HALF_HANDICAP_3WAY_SOCCER: i++,
        SECOND_HALF_HANDICAP_3WAY_SOCCER: i++,
        GOAL_LINE_2WAY_SOCCER: i++,
        FIRST_HALF_GOAL_LINE_2WAY_SOCCER: i++,
        SECOND_HALF_GOAL_LINE_2WAY_SOCCER: i++,
        ALTERNATIVE_GOAL_LINE_2WAY_SOCCER: i++,
        ALTERNATIVE_FIRST_HALF_GOAL_LINE_2WAY_SOCCER: i++,
        ALTERNATIVE_SECOND_HALF_GOAL_LINE_2WAY_SOCCER: i++,
        FIRST_HALF_WINNER_3WAY_SOCCER: i++,
        SECOND_HALF_WINNER_3WAY_SOCCER: i++,
        MATCH_WINNER_3WAY_SOCCER: i++,
        DOUBLE_CHANCE_3WAY_SOCCER: i++,
        DRAW_NO_BET_2WAY_SOCCER: i++,
        NUMBER_OF_YELLOW_CARDS_2WAY_SOCCER: i++
    };

    i = 0;
    const SpecialCategory_esports = {
        MATCH_WINNER_2WAY_ESPORTS: i++,
        MAP1_WINNER_2WAY_ESPORTS: i++,
        MAP2_WINNER_2WAY_ESPORTS: i++,
        MAP3_WINNER_2WAY_ESPORTS: i++,
        MAP4_WINNER_2WAY_ESPORTS: i++,
        MAP5_WINNER_2WAY_ESPORTS: i++,
        SERIES_WINNER_2WAY_ESPORTS: i++,
        MATCH_HANDICAP_2WAY_ESPORTS: i++,
        FIRST_TO_10_KILLS_2WAY_ESPORTS: i++,
        FIRST_BLOOD_WINNER_2WAY_ESPORTS: i++,
        TOTALS_KILLS_2WAY_ESPORTS: i++,
        MAP1_KILLS_2WAY_ESPORTS: i++,
        MAP2_KILLS_2WAY_ESPORTS: i++,
        MAP3_KILLS_2WAY_ESPORTS: i++,
        MAP4_KILLS_2WAY_ESPORTS: i++,
        MAP5_KILLS_2WAY_ESPORTS: i++,
        TEAM_TOTALS_KILLS_2WAY_ESPORTS: i++
    };

    function parseme(item, sport_type, general_bettype, special_category, special, ret) {
        let final = [];
        let has_rows = false;
        let is3way = false;
        let cols = ['.gll-MarketColumnHeader'];
        let rows = [];
        let cat = item.querySelector('.gll-MarketGroupButton_Text');
        if (!cat) return {};
        let rowvals = Array.prototype.slice.call(item.querySelectorAll('.gll-ParticipantRowValue,.gll-ParticipantRowName_Name'), 0);
        has_rows = rowvals.length != 0;
        if (has_rows) {
            rows = special ? rowvals.map(e => {
                return e.textContent
            }) :
            calcVals(rowvals)
        }
        let unf_lbls = Array.prototype.slice.call(item.querySelectorAll('.gll-ParticipantCentered_Name,.gll-Participant_Name,.gll-ParticipantOddsOnly'), 0);
        let unf_hdps = Array.prototype.slice.call(item.querySelectorAll('.gll-ParticipantCentered_Handicap,.gll-Participant_Handicap'), 0);
        let unf_odds = Array.prototype.slice.call(item.querySelectorAll('.gll-ParticipantCentered_Odds,.gll-Participant_Odds,.gll-ParticipantOddsOnly_Odds'), 0);
        let unf_ptcps = Array.prototype.slice.call(item.querySelectorAll('.gll-Participant_General'), 0);
        let lbls = null;
        if (unf_lbls.length) {
            lbls = unf_lbls
        } else {
            lbls = unf_ptcps
        }
        lbls = lbls.map(lab => {
            let head = null;
        cols.some(function (classid) {
            for (let tmp = lab; tmp; tmp = tmp.parentElement) {
                if (tmp.classList.contains('gll-MarketGroup')) break;
                head = tmp.querySelector(classid);
                if (head) {
                    if (head.textContent === 'Exactly' || head.textContent === 'Draw') is3way = true;
                    break
                }
            }
            return head != null
        });
        return head ? head.textContent : lab.textContent
    })
        ;
        let hdps = (!unf_hdps.length) ? (has_rows ? [] : calcVals(unf_lbls)) : calcVals(unf_hdps);
        let odds = calcVals(unf_odds);
        if (odds.length === lbls.length) {
            for (let j = 0; j < odds.length; ++j) {
                let obj = {
                    odds: odds[j].val
                };
                obj.category_name = cat.textContent;
                obj.special_category = special_category;
                let hd = null;
                let found = false,
                    specialized = false;
                if (has_rows && hdps.length && odds.length != hdps.length) {
                    log('handicap exist but not the same length as odds,we have to link them based on their parent element');
                    for (let tmp = unf_odds[j]; tmp; tmp = tmp.parentElement) {
                        if (tmp.classList.contains('gll-Market_General')) break;
                        unf_hdps.some((unhdp, n) => {
                            for(let tmp2 = unhdp;
                        tmp2;
                        tmp2 = tmp2.parentElement
                    )
                        {
                            if (tmp2.classList.contains('gll-Market_General')) break;
                            if (tmp2 === tmp) {
                                obj.hdp = hdps[n];
                                let isblank = tmp.classList.contains('gll-ParticipantCentered_BlankName');
                                if (!isblank) {
                                    let specialized_names = Array.prototype.slice.call(tmp.querySelectorAll('.gll-ParticipantCentered_Name,.gll-Participant_Name'), 0);
                                    if (specialized_names.length) {
                                        log('specialized name found for', tmp);
                                        specialized = true;
                                        if (specialized_names[0].textContent == 'O ') {
                                            obj.special_bettype = SpecialBetType.TOTAL_OVER;
                                            obj.secondary_name = 'Over';
                                        } else if (specialized_names[0].textContent == 'U ') {
                                            obj.special_bettype = SpecialBetType.TOTAL_UNDER;
                                            obj.secondary_name = 'Under';
                                        } else {
                                            obj.secondary_name = specialized_names[0].textContent
                                        }
                                    }
                                }
                                found = true;
                                break
                            }
                        }
                        return found
                    })
                        ;
                        if (found) {
                            break
                        }
                    }
                }
                if (has_rows) {
                    let tmp = rows[j % rows.length];
                    if (special) hd = tmp;
                    else hd = (!tmp || isNaN(tmp.val)) ? null : tmp
                } else if (odds.length === hdps.length) {
                    let tmp = hdps[j];
                    hd = (!tmp || isNaN(tmp.val)) ? null : tmp
                }
                if (special) {
                    log('special');
                    obj.subcategory_name = lbls[j];
                    obj.name = hd;
                    if (obj.subcategory_name == 'Total') {
                        if (obj.secondary_name && obj.category_name != 'Game Lines' && obj.category_name != '1st Half Lines' && obj.category_name != '2nd Half Lines' && obj.category_name != '1st Quarter Lines' && obj.category_name != '2nd Quarter Lines' && obj.category_name != '3rd Quarter Lines' && obj.category_name != '4th Quarter Lines') {
                            obj.general_bettype = GeneralBetType.TEAM_TOTAL_POINTS;
                        } else {
                            if (obj.category_name === 'Game Lines') obj.special_category = SpecialCategory_basketball.TOTAL_2WAY_BASKETBALL;
                            else if (obj.category_name === '1st Half Lines') obj.special_category = SpecialCategory_basketball.FIRST_HALF_TOTAL_2WAY_BASKETBALL;
                            else if (obj.category_name === '2nd Half Lines') obj.special_category = SpecialCategory_basketball.SECOND_HALF_TOTAL_2WAY_BASKETBALL;
                            else if (obj.category_name === '1st Quarter Lines') obj.special_category = SpecialCategory_basketball.FIRST_QUARTER_TOTAL_2WAY_BASKETBALL;
                            else if (obj.category_name === '2nd Quarter Lines') obj.special_category = SpecialCategory_basketball.SECOND_QUARTER_TOTAL_2WAY_BASKETBALL;
                            else if (obj.category_name === '3rd Quarter Lines') obj.special_category = SpecialCategory_basketball.THIRD_QUARTER_TOTAL_2WAY_BASKETBALL;
                            else if (obj.category_name === '4th Quarter Lines') obj.special_category = SpecialCategory_basketball.FOURTH_QUARTER_TOTAL_2WAY_BASKETBALL;
                            obj.general_bettype = GeneralBetType.TOTAL_POINTS
                        }
                    } else if (obj.subcategory_name == 'Spread') {
                        if (obj.category_name === 'Game Lines') obj.special_category = SpecialCategory_basketball.HANDICAP_2WAY_BASKETBALL;
                        else if (obj.category_name === '1st Half Lines') obj.special_category = SpecialCategory_basketball.FIRST_HALF_HANDICAP_2WAY_BASKETBALL;
                        else if (obj.category_name === '2nd Half Lines') obj.special_category = SpecialCategory_basketball.SECOND_HALF_HANDICAP_2WAY_BASKETBALL;
                        else if (obj.category_name === '1st Quarter Lines') obj.special_category = SpecialCategory_basketball.FIRST_QUARTER_HANDICAP_2WAY_BASKETBALL;
                        else if (obj.category_name === '2nd Quarter Lines') obj.special_category = SpecialCategory_basketball.SECOND_QUARTER_HANDICAP_2WAY_BASKETBALL;
                        else if (obj.category_name === '3rd Quarter Lines') obj.special_category = SpecialCategory_basketball.THIRD_QUARTER_HANDICAP_2WAY_BASKETBALL;
                        else if (obj.category_name === '4th Quarter Lines') obj.special_category = SpecialCategory_basketball.FOURTH_QUARTER_HANDICAP_2WAY_BASKETBALL;
                        obj.general_bettype = GeneralBetType.SPREAD
                    } else if (obj.subcategory_name == 'Money Line' || obj.subcategory_name == 'Match' || obj.subcategory_name.indexOf('Set ') >= 0) {
                        if (obj.subcategory_name == 'Money Line') {
                            if (obj.category_name === 'Game Lines') obj.special_category = SpecialCategory_basketball.TO_WIN_MATCH_2WAY_BASKETBALL;
                            else if (obj.category_name === '1st Half Lines') obj.special_category = SpecialCategory_basketball.FIRST_HALF_WINNER_2WAY_BASKETBALL;
                            else if (obj.category_name === '2nd Half Lines') obj.special_category = SpecialCategory_basketball.SECOND_HALF_WINNER_2WAY_BASKETBALL;
                            else if (obj.category_name === '1st Quarter Lines') obj.special_category = SpecialCategory_basketball.FIRST_QUARTER_WINNER_2WAY_BASKETBALL;
                            else if (obj.category_name === '2nd Quarter Lines') obj.special_category = SpecialCategory_basketball.SECOND_QUARTER_WINNER_2WAY_BASKETBALL;
                            else if (obj.category_name === '3rd Quarter Lines') obj.special_category = SpecialCategory_basketball.THIRD_QUARTER_WINNER_2WAY_BASKETBALL;
                            else if (obj.category_name === '4th Quarter Lines') obj.special_category = SpecialCategory_basketball.FOURTH_QUARTER_WINNER_2WAY_BASKETBALL;
                        } else if (obj.subcategory_name === 'Match') obj.special_category = SpecialCategory_tennis.MATCH_WINNER_2WAY_TENNIS
                        else if (obj.subcategory_name === ' Set 1') obj.special_category = SpecialCategory_tennis.SET1_WINNER_TENNIS
                        else if (obj.subcategory_name === ' Set 2') obj.special_category = SpecialCategory_tennis.SET2_WINNER_TENNIS
                        else if (obj.subcategory_name === ' Set 3') obj.special_category = SpecialCategory_tennis.SET3_WINNER_TENNIS
                        else if (obj.subcategory_name === ' Set 4') obj.special_category = SpecialCategory_tennis.SET4_WINNER_TENNIS
                        obj.general_bettype = GeneralBetType.MONEYLINE
                    }
                    ;
                    if (obj.hd) {
                        if (obj.special_bettype === SpecialBetType.SpecialBetType_UNKNOWN) {
                            if (obj.hd && parseFloat(obj.hd.val) >= 0) obj.special_bettype = SpecialBetType.HANDICAP_PLUS;
                            else obj.special_bettype = SpecialBetType.HANDICAP_MINUS
                        }
                    } else {
                        obj.special_bettype = SpecialBetType.MONEYLINE_SPECIAL
                    }
                } else {
                    log('not so special');
                    obj.name = lbls[j];
                    if (hd) {
                        obj.hdp = hd
                        if (obj.special_bettype === SpecialBetType.SpecialBetType_UNKNOWN) {
                            if (hd && parseFloat(hd.val) >= 0) obj.special_bettype = SpecialBetType.HANDICAP_PLUS;
                            else obj.special_bettype = SpecialBetType.HANDICAP_MINUS;
                        }
                    } else {
                        obj.special_bettype = SpecialBetType.MONEYLINE_SPECIAL;
                    }
                }
                for (let tmp = unf_odds[j]; tmp; tmp = tmp.parentElement) {
                    if (tmp.classList.contains('gll-Market_General')) break;
                    if (tmp.classList.contains('gll-Market_CN-3')) {
                        is3way = true;
                        break
                    }
                }
                if (is3way) {
                    log('3way it is,we base seat based on the array size');
                    if (has_rows && rows.length > 0) {
                        let idx = parseInt(final.length / rows.length);
                        obj.seat = (idx == 0) ? 1 : ((idx == 1) ? 4 : 2)
                    } else {
                        if (final.length > 1) obj.seat = 0;
                        obj.seat = !final.length ? 1 : (final.length == 1 ? 4 : 2)
                    }
                } else {
                    log('2way,check name and decide');
                    obj.seat = 0;
                    if (general_bettype === GeneralBetType.TEAM_TOTAL_POINTS) {
                        if (obj.name.indexOf(team1) >= 0) obj.seat = 1;
                        else if (obj.name.indexOf(team2) >= 0) obj.seat = 2
                    } else {
                        if (obj.name.indexOf(team1) >= 0 || obj.name.indexOf('Over') >= 0) obj.seat = 1;
                        else if (obj.name.indexOf(team2) >= 0 || obj.name.indexOf('Under') >= 0) obj.seat = 2
                    }
                }
                if (!special) obj.general_bettype = general_bettype;

                final.push(ret ? ret(obj) : obj)
            }
        }
        return final
    }


    function findScore() {
        let scor = {};
        let nl_cells = document.querySelectorAll('.ipe-SoccerGridColumn_IGoal .ipe-SoccerGridCell');
        let cells = Array.prototype.slice.call(nl_cells, 0);
        cells.some((cell, i) = > {
            if(!i
    )
        {
            scor.home = parseInt(cell.textContent)
        }
    else
        if (i === 1) {
            scor.away = parseInt(cell.textContent);
            return true
        }
    })
        ;
        return scor
    };
    let output = {};
    let nl_btns = document.querySelectorAll('.gll-MarketGroup');
    let btns = Array.prototype.slice.call(nl_btns, 0);
    btns.forEach(function (item) {
        let b = item.querySelector('.gll-MarketGroupButton');
        if (b && !b.classList.contains('gll-MarketGroup_Open')) b.click();
        for (let tmp = item; tmp; tmp = tmp.parentElement) {
            if (tmp.classList.contains('gll-MarketGroup')) {
                if (tmp.classList.contains('gll-MarketGroup_Suspended')) return false;
                else break;
            }
        }
        let cat = item.querySelector('.gll-MarketGroupButton_Text');
        //Moneylines
        if (cat && (cat.textContent === 'Double Chance')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.MONEYLINE, SpecialCategory_soccer.DOUBLE_CHANCE_3WAY_SOCCER)
        } else if (cat && (cat.textContent === 'Fulltime Result')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.MONEYLINE, SpecialCategory_soccer.MATCH_WINNER_3WAY_SOCCER)
        } else if (cat && (cat.textContent === 'Half Time Result')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.MONEYLINE, SpecialCategory_soccer.FIRST_HALF_WINNER_3WAY_SOCCER)
        } else if (cat && (cat.textContent === 'Draw No Bet')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.MONEYLINE, SpecialCategory_soccer.DRAW_NO_BET_2WAY_SOCCER)
        }
        //Spreads
        else if (cat && (cat.textContent.startsWith('Asian Handicap ('))) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.ASIAN_HANDICAP_SOCCER)
        } else if (cat && (cat.textContent.startsWith('1st Half Asian Handicap ('))) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.FIRST_HALF_ASIAN_HANDICAP_SOCCER)
        }
        //Totals
        else if (cat && (cat.textContent === 'Match Goals')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.MATCH_GOALS_2WAY_SOCCER)
        } else if (cat && (cat.textContent === 'Alternative Match Goals')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.ALTERNATIVE_MATCH_GOALS_2WAY_SOCCER)
        } else if (cat && (cat.textContent === 'First Half Goals')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.FIRST_HALF_GOALS_2WAY_SOCCER)
        } else if (cat && (cat.textContent.startsWith('Goal Line ('))) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.GOAL_LINE_2WAY_SOCCER)
        } else if (cat && (cat.textContent.startsWith('1st Half Goal Line ('))) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.FIRST_HALF_GOAL_LINE_2WAY_SOCCER)
        } else if (cat && (cat.textContent === 'Asian Corners')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.ASIAN_CORNERS_SOCCER)
        } else if (cat && (cat.textContent === '2-Way Corners')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.ALTERNATIVE_ASIAN_CORNERS_SOCCER)
        } else if (cat && (cat.textContent === '1st Half Asian Corners')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.FIRST_HALF_ASIAN_CORNERS_SOCCER)
        } else if (cat && (cat.textContent === '1st Half Corners')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.FIRST_HALF_CORNERS_3WAY_SOCCER)
        } else if (cat && (cat.textContent === 'Match Corners')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.SPREAD, SpecialCategory_soccer.TOTAL_CORNERS_3WAY_SOCCER)
        } else if (cat && (cat.textContent === 'Number of Cards')) {
            output[cat.textContent] = parseme(item, SportType.SOCCER, GeneralBetType.TEAM_TOTAL_POINTS, SpecialCategory_soccer.NUMBER_OF_YELLOW_CARDS_2WAY_SOCCER)
        }
    });
    return {
        categories: output
    }
})()
