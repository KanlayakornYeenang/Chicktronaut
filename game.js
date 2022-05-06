const SCALE = 4;
const WIDTH = 512;
const HEIGHT = 512;
const SCALED_WIDTH = 162;
const SCALED_HEIGHT = 162;
const CYCLE_LOOP = [0, 1, 2, 3];
const FACING_DOWN = 2;
const FACING_UP = 0;
const FACING_LEFT = 3;
const FACING_RIGHT = 1;
const FRAME_LIMIT = 12;
const delay = 10;

let run = false;
let comic = false;
let movement_speed = 6;
let canvas = document.querySelector('#myCanvas');
let ctx = canvas.getContext('2d');
let keyPresses = {};
let mouseclick = false;
let currentDirection = FACING_RIGHT;
let currentLoopIndex = 0;
let frameCount = 0;
let frame = new Image();

let sander = new Image();
let sander_current = sander;
let sander_weapon = new Image();
let sander_sword = new Image();
let sander_pf_st = new Image();
let sander_dia = new Image();
let sander_damage = new Image();
let sander_sword_damage = new Image();

let bullet_posxy = [];
let bullet_posx = 0;
let bullet_posy = 0;
let bullet_timer = delay;
let bullet_w = new Image();
let bullet_a = new Image();
let bullet_s = new Image();
let bullet_d = new Image();
let bullet = bullet_w;
let playershoot = false;

let energy = 145;

let bg1 = new Image();
let bg1_1 = new Image();
let bg2 = new Image();
let bg2_1 = new Image();
let bg3 = new Image();
let bg3_1 = new Image();
let bg4 = new Image();
let bg5 = new Image();
let bg5_1 = new Image();

let bg1_obj1 = new Image();
let bg2_obj1 = new Image();
let bg3_obj1 = new Image();
let bg5_obj1 = new Image();

//เปลี่ยนตรงนี้เพื่อวาร์ป
let positionX = 12;
let positionY = 522;
let bg = bg1;
let currentBg = bg1;
let currentBg_ = bg1_1;
let bg_obj = bg1_obj1;
let checkpoint = 1;
let currentEvent = -1;
//

let objposX = [];
let objposY = [];
let objposXY = [];
let objstatus = false;

let alpha = 0, delta = 0.025;
let fade_status = false;
let sword_status = true;
let gun_status = true;

let dialogue_status = false;
let words = ["sander:โอ้ย...ที่นี่มันที่ไหนเนี่ย ปวดหัวชะมัด", "sander:แปลกมาก ทำไมถึง...จำอะไรไม่ได้เลยล่ะ?"];
let words_index = 0;
let count = 0;
let chars;
let textx = 788
let texty = 925
let allowNextdialogue = false;
let nextdialogue = false;

let extrax = [1260, 1554]
let extray = [390, 132]

let inventory = [];
let key = new Image();
let usekey = new Image();
let sword = new Image();
let swordf = new Image();
let gun = new Image();
let lefthand = undefined;
let lefthand_current = undefined;
let righthand = undefined;
let righthand_current = undefined;
let playerhit = false;

let worm = new Image();
let axeon = new Image();
let worm_damage = new Image();
let axeon_damage = new Image();
let axeonf = new Image();
let bunchun = new Image();
let bunchun_damage = new Image();
let bunchun_action4 = new Image();
let bunchun_zeri = new Image();

let fight_status = false;
let hp_sander = 100;
let hp_max = 100;
let hp_monster = 5;
let currentLoopIndex_monster = 0;
const CYCLE_LOOP_MONSTER = [0, 1, 2, 3, 3];
let monster_action = 0;
let monster_speed = 3;
let monster_posx = [1556, 1150, 1596];
let monster_posy = [80, 402, 522];
let monster_bulletx = -100;
let frameCount_monster = 0;
let monster_move = true;
let monster_attack = false;
let worm_check = false;
let axeon_check = false;
let dead_status = false;
let temp_x = 0;
let temp_y = 0;
let posatmx = 0;
let posatmy = 0;
let player_takedmg = false;
let monster_takedmg = false;

window.addEventListener('keydown', (event) => {keyPresses[event.code] = true; });
window.addEventListener('keyup', (event) => { keyPresses[event.code] = false; });
window.addEventListener('mousedown', (event) => { mouseclick = true; });
window.addEventListener('mouseup', (event) => { mouseclick = false; });

function loadImage() {
    sander.src = 'https://cdn.discordapp.com/attachments/933591523189215235/968708920317202472/sander_final.png';
    sander_weapon.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966022737661399050/sander_weapon.png'
    sander_sword.src = 'https://cdn.discordapp.com/attachments/933591523189215235/967714982135480330/sander_sword.png'
    sander_damage.src = 'https://cdn.discordapp.com/attachments/933591523189215235/968359288064053259/sander_damage.png'
    sander_sword_damage.src = 'https://cdn.discordapp.com/attachments/933591523189215235/968359287715954708/sander_sword_damage.png'
    sander.onload = () => { window.requestAnimationFrame(gameLoop); };
    sander_pf_st.src = 'https://media.discordapp.net/attachments/933591523189215235/965153062740176916/sander_pf_st.png';
    sander_dia.src = 'https://cdn.discordapp.com/attachments/933591523189215235/966573732271382578/sander_dailogue.png';

    bullet_w.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966710007934636062/bullet_w.png'
    bullet_a.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966710008307916820/bullet_a.png'
    bullet_s.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966710007670378496/bullet_s.png'
    bullet_d.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966710007246749766/bullet_d.png'

    bg1.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966712027332632596/bg1.png';
    bg1_1.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966712027877875842/bg1_1.png';
    bg2.src = 'https://cdn.discordapp.com/attachments/933591523189215235/968912790016389150/bg2.jpg';
    bg2_1.src = 'https://cdn.discordapp.com/attachments/933591523189215235/968912800300798022/bg2_1.jpg';
    bg3.src = 'https://cdn.discordapp.com/attachments/933591523189215235/966709748328190052/bg3.jpg'
    bg3_1.src = 'https://cdn.discordapp.com/attachments/933591523189215235/966709748701495366/bg3_1.jpg'
    bg4.src = 'https://cdn.discordapp.com/attachments/933591523189215235/968922735940075612/bg4.jpg'
    bg5.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966711169886863410/bg5.jpg'
    bg5_1.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966711170138525767/bg5_1.jpg'

    bg1_obj1.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966712026724438026/bg1_obj1.png';
    bg2_obj1.src = 'https://cdn.discordapp.com/attachments/933591523189215235/968912908018917416/bg2_obj1.png'
    bg3_obj1.src = 'https://cdn.discordapp.com/attachments/933591523189215235/966709747761963008/bg3_obj1.png'
    bg5_obj1.src = 'https://cdn.discordapp.com/attachments/812749326543487058/966711170381783080/bg5_obj1.png'

    frame.src = 'https://media.discordapp.net/attachments/933591523189215235/965956913730838579/frame.png'
    key.src = 'https://cdn.discordapp.com/attachments/933591523189215235/966987241731813396/key.png'
    usekey.src = 'https://cdn.discordapp.com/attachments/933591523189215235/967032887402700860/usekey.png'
    sword.src = 'https://cdn.discordapp.com/attachments/933591523189215235/967632061118697482/sword.png'
    swordf.src = 'https://cdn.discordapp.com/attachments/812749326543487058/967095296968523796/swordf.png'
    gun.src = 'https://cdn.discordapp.com/attachments/933591523189215235/972185631478407258/gunbg.png'

    worm.src = 'https://cdn.discordapp.com/attachments/933591523189215235/968199488185446420/worm.png'
    worm_damage.src = 'https://cdn.discordapp.com/attachments/933591523189215235/968361910737207306/worm_damage.png'
    axeon.src = 'https://cdn.discordapp.com/attachments/933591523189215235/969666663681253457/axeon.png'
    axeon_damage.src = 'https://cdn.discordapp.com/attachments/933591523189215235/970555133308051507/axeon_damage.png'
    axeonf.src = 'https://cdn.discordapp.com/attachments/933591523189215235/970556505394913290/axeonf.png'
    bunchun.src = 'https://cdn.discordapp.com/attachments/933591523189215235/971441631783952394/miniboss.png'
    bunchun_damage.src = 'https://cdn.discordapp.com/attachments/933591523189215235/971083633504952380/miniboss_damage.png'
    bunchun_action4.src = 'https://cdn.discordapp.com/attachments/933591523189215235/971421292895043634/miniboss_action4.png'
    bunchun_zeri.src = 'https://cdn.discordapp.com/attachments/933591523189215235/971445324340133898/miniboss_zeri.png'
}

function leftsword() {
    if (lefthand_current == "sword") {
        lefthand = undefined;
        lefthand_current = undefined;
    }
    else if (sword_status) {
        lefthand = "sword"
        lefthand_current = "sword";
        if (righthand == "sword") {
            righthand = undefined
            righthand_current = undefined
        }
    }
}

function rightsword() {
    if (righthand_current == "sword") {
        righthand = undefined;
        righthand_current = undefined;
    }
    else if (sword_status) {
        righthand = "sword"
        righthand_current = "sword";
        if (lefthand == "sword") {
            lefthand = undefined
            lefthand_current = undefined
        }
    }
}

function leftgun() {
    if (lefthand_current == "gun") {
        lefthand = undefined;
        lefthand_current = undefined;
    }
    else if (gun_status) {
        lefthand = "gun"
        lefthand_current = "gun";
        if (righthand == "gun") {
            righthand = undefined
            righthand_current = undefined
        }
    }
}

function rightgun() {
    if (righthand_current == "gun") {
        righthand = undefined;
        righthand_current = undefined;
    }
    else if (gun_status) {
        righthand = "gun"
        righthand_current = "gun";
        if (lefthand == "gun") {
            lefthand = undefined
            lefthand_current = undefined
        }
    }
}

function retry() {
    hp_sander = hp_max;
    fight_status = false;
    fade_status = true;
    currentDirection = FACING_RIGHT
    if (checkpoint == 2) {
        monster_posx[0] = 1556
        monster_posy[0] = 80
        hp_monster = 150
        positionX = 12;
        positionY = 450;
    }
    if (checkpoint == 4) {
        monster_posx[1] = 1150
        monster_posy[1] = 402
        hp_monster = 150
        positionX = 12;
        positionY = 402;
    }
}

function up() {
    document.addEventListener('click', function (event) {
        if (!dialogue_status) {
            if (event.target.matches('.weapon-l')) {
                document.getElementsByClassName("dropup-l")[0].style.display = "block"
            }
            else {
                document.getElementsByClassName("dropup-l")[0].style.display = "none"
            }
            if (event.target.matches('.weapon-r')) {
                document.getElementsByClassName("dropup-r")[0].style.display = "block"
            }
            else {
                document.getElementsByClassName("dropup-r")[0].style.display = "none"
            }
        }
    })
    if (!gun_status) {
        document.getElementsByClassName("imggun")[0].style.opacity = "0.3"
        document.getElementsByClassName("imggun")[1].style.opacity = "0.3"
        document.getElementsByClassName("nameweapon")[1].style.opacity = "0.3"
        document.getElementsByClassName("nameweapon")[3].style.opacity = "0.3"
    }
    if (gun_status) {
        document.getElementsByClassName("imggun")[0].style.opacity = "1"
        document.getElementsByClassName("imggun")[1].style.opacity = "1"
        document.getElementsByClassName("nameweapon")[1].style.opacity = "1"
        document.getElementsByClassName("nameweapon")[3].style.opacity = "1"
    }
    if (!sword_status) {
        document.getElementsByClassName("imgsword")[0].style.opacity = "0.3"
        document.getElementsByClassName("imgsword")[1].style.opacity = "0.3"
        document.getElementsByClassName("nameweapon")[0].style.opacity = "0.3"
        document.getElementsByClassName("nameweapon")[2].style.opacity = "0.3"
    }
    if (sword_status) {
        document.getElementsByClassName("imgsword")[0].style.opacity = "1"
        document.getElementsByClassName("imgsword")[1].style.opacity = "1"
        document.getElementsByClassName("nameweapon")[0].style.opacity = "1"
        document.getElementsByClassName("nameweapon")[2].style.opacity = "1"
    }
}

function drawBg() {
    ctx.drawImage(bg, 0, 0, myCanvas.width, myCanvas.height);
}

function drawFrame(image, frameX, frameY, canvasX, canvasY, WIDTH, HEIGHT, SCALED_WIDTH, SCALED_HEIGHT) {
    ctx.drawImage(image,
        frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
        canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

function drawObj() {
    ctx.drawImage(bg_obj, 0, 0, myCanvas.width, myCanvas.height);
}

loadImage();

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let hasMoved = false;
    playershoot = false;

    if (checkpoint == 1) {
        walkCollison(156, 174, 198, 60);
        walkCollison(1476, 414, 150, 102);
        walkCollison(1794, 414, 132 - 6, 102);
        walkCollison(1830, 906, 84, 168);
        walkCollison(1500, 936, 318, 138);
        walkCollison(1188, 966, 300, 108);
        walkCollison(876, 936, 300, 138);
        walkCollison(330, 972, 534, 102);
        walkCollison(138, 936, 180, 138);
        walkCollison(6, 888, 120, 186);

        if (positionX >= 1770 && positionY > 426 && currentDirection == FACING_RIGHT && currentEvent >= 7 && extrax[1] >= 2000) {
            bg = bg2;
            currentBg = bg2;
            currentBg_ = bg2_1;
            bg_obj = bg2_obj1;
            checkpoint = 2;
            positionX = 12;
            positionY = 450;
            fade_status = true;
        }
    }

    if (checkpoint == 2) {
        walkCollison(6, 150, 390, 78);
        walkCollison(942, 6, 1038, 120);
        walkCollison(1098, 108, 858, 108);
        walkCollison(1158, 210, 798, 96);
        walkCollison(1158, 300, 798, 60);
        walkCollison(1830, 906, 144, 168);
        walkCollison(1500, 936, 318, 138);
        walkCollison(1188, 966, 300, 108);
        walkCollison(876, 936, 300, 138);
        walkCollison(330, 972, 534, 102);
        walkCollison(138, 936, 180, 138);
        walkCollison(6, 888, 120, 186);
        if (positionX <= -18 && positionY > 144 && currentDirection == FACING_LEFT && !fight_status) {
            bg = bg1;
            currentBg = bg1;
            currentBg_ = bg1_1;
            bg_obj = bg1_obj1;
            checkpoint = 1;
            positionX = 1758
            positionY = 612;
            fade_status = true;
        }
        if (positionX >= 1770 && positionY > 426 && currentDirection == FACING_RIGHT && !fight_status && worm_check) {
            positionX = 12
            positionY = 606
            bg = bg3
            currentBg = bg3
            currentBg_ = bg3_1
            bg_obj = bg3_obj1
            checkpoint = 3
            fade_status = true;
        }
    }

    if (checkpoint == 3) {
        walkCollison(6, 480, 144, 150)
        walkCollison(6, 558, 144, 78)
        walkCollison(6, 450, 234, 60)
        walkCollison(6, 252, 234, 228)
        walkCollison(6, 180, 234, 72)
        walkCollison(240, 180, 240, 72)
        walkCollison(360, 180, 120, 72)
        walkCollison(480, 180, 198 - 24, 72)
        walkCollison(516, 252, 162 - 24, 72)
        walkCollison(864, 288, 156, 114)
        walkCollison(1020, 288, 894, 42)
        walkCollison(1020, 330, 894, 114)
        walkCollison(1134, 408, 780, 72)
        walkCollison(1338, 444, 576, 72)
        walkCollison(1428, 918, 486, 72)
        walkCollison(1332, 990, 582, 84)

        if (positionX <= -18 && positionY > 596 && currentDirection == FACING_LEFT) {
            bg = bg2;
            currentBg = bg2;
            currentBg_ = bg2_1;
            bg_obj = bg2_obj1;
            checkpoint = 2;
            positionX = 1758
            positionY = 612;
            fade_status = true;
        }
        if (positionX >= 1770 && positionY > 450 && currentDirection == FACING_RIGHT) {
            positionX = 12
            positionY = 522
            hp_monster = 150;
            bg = bg4
            currentBg = bg4
            checkpoint = 4
            fade_status = true;
        }
    }

    if (checkpoint == 4) {
        walkCollison(0, 0, 0, 0)

        if (positionX <= -18 && positionY > 215 && currentDirection == FACING_LEFT && !fight_status) {
            bg = bg3_1;
            currentBg = bg3;
            currentBg_ = bg3_1;
            bg_obj = bg3_obj1;
            checkpoint = 3;
            positionX = 1758
            positionY = 612;
            fade_status = true;
        }
        if (positionX >= 1615 && positionY >= 245 && positionY <= 460 && currentDirection == FACING_RIGHT) {
            positionX = 12
            positionY = 522
            hp_monster = 150;
            bg = bg5;
            currentBg = bg5;
            currentBg_ = bg5_1;
            bg_obj = bg5_obj1;
            checkpoint = 5
            fade_status = true;
        }
    }

    if (checkpoint == 5) {
        walkCollison(0, 0, 0, 0)

        if (positionX <= -18 && positionY > 294 && currentDirection == FACING_LEFT) {
            positionX = 1596
            positionY = 492
            bg = bg4
            currentBg = bg4
            checkpoint = 4
            fade_status = true;
        }
    }

    if (checkpoint == 6) {
        walkCollison(0, 0, 0, 0)
    }

    if ((keyPresses.KeyW || keyPresses.KeyS) && (keyPresses.KeyA || keyPresses.KeyD)) {
        movement_speed /= Math.sqrt(2);
    }
    if (keyPresses.KeyW && !dialogue_status && !playerhit && hp_sander > 0 && document.getElementById("homepage").style.display == "none" && document.getElementById("comic-container").style.display == "none") {
        moveCharacter(0, -movement_speed, FACING_UP);
        hasMoved = true;
    }
    if (keyPresses.KeyS && !dialogue_status && !playerhit && hp_sander > 0 && document.getElementById("homepage").style.display == "none" && document.getElementById("comic-container").style.display == "none") {
        moveCharacter(0, movement_speed, FACING_DOWN);
        hasMoved = true;
    }
    if (keyPresses.KeyA && !dialogue_status && !playerhit && hp_sander > 0 && document.getElementById("homepage").style.display == "none" && document.getElementById("comic-container").style.display == "none") {
        moveCharacter(-movement_speed, 0, FACING_LEFT);
        hasMoved = true;
    }
    if (keyPresses.KeyD && !dialogue_status && !playerhit && hp_sander > 0 && document.getElementById("homepage").style.display == "none" && document.getElementById("comic-container").style.display == "none") {
        moveCharacter(movement_speed, 0, FACING_RIGHT);
        hasMoved = true;
    }
    if (hp_sander > 0 && ((keyPresses.Space || mouseclick) && ((lefthand == "sword" && righthand == undefined) || (righthand == "sword" && lefthand == undefined))
    || (mouseclick && righthand == "sword" && lefthand == "gun" || (keyPresses.Space && righthand == "gun" && lefthand == "sword")))
    && !dialogue_status  && document.getElementById("homepage").style.display == "none" && document.getElementById("comic-container").style.display == "none") {
        playerhit = true;
    }
    if (hp_sander > 0 && ((keyPresses.Space || mouseclick) && ((lefthand == "gun" && righthand == undefined) || (righthand == "gun" && lefthand == undefined))
    || (mouseclick && righthand == "gun" && lefthand == "sword" || (keyPresses.Space && righthand == "sword" && lefthand == "gun")))
    && !dialogue_status  && document.getElementById("homepage").style.display == "none" && document.getElementById("comic-container").style.display == "none") {
        playershoot = true;
    }
    if (playerhit && hp_sander > 0) {
        if (hasMoved) { currentLoopIndex = 0 }
        hasMoved = false;
        sander_current = sander_sword
    }
    else if (playershoot && hp_sander > 0) {
        if (hasMoved) { currentLoopIndex = 0 }
        hasMoved = false;
        sander_current = sander_weapon
    }
    else {
        sander_current = sander
    }
    if ((keyPresses.Space || mouseclick) && energy > 0 && playershoot && !dialogue_status && gun_status
    && document.getElementById("homepage").style.display == "none" && document.getElementById("comic-container").style.display == "none") {
        if (energy != 0) { energy -= 1; }
        if (bullet_timer <= 0) {
            bullet_posx = positionX + 78;
            bullet_posy = positionY + 78;
            if (currentDirection == FACING_LEFT) { bullet_posxy.push([bullet_posx - 156, bullet_posy - 78, currentDirection, 0]) }
            if (currentDirection == FACING_RIGHT) { bullet_posxy.push([bullet_posx, bullet_posy - 78, currentDirection, 0]) }
            if (currentDirection == FACING_UP) { bullet_posxy.push([bullet_posx - 78, bullet_posy - 162, currentDirection, 0]) }
            if (currentDirection == FACING_DOWN) { bullet_posxy.push([bullet_posx - 78, bullet_posy, currentDirection, 0]) }
            bullet_timer = delay;
        }
        bullet_timer -= 1;
    }
    else {
        if (energy < 145) {
            energy += 0.5;
        }
    }

    if (!run) {
        document.getElementById("homepage").style.display = "flex"
        if (keyPresses.Space || mouseclick) { run = true }
    }
    if (run && currentEvent == -1 && !keyPresses.Space && !mouseclick) {
        document.getElementById("comic-container").style.display = "flex"
        comic = true
    }
    if (comic && (keyPresses.Space || mouseclick) && currentEvent == -1) {
        currentEvent = 0;
    }
    if (!keyPresses.Space && !mouseclick && currentEvent == 0 && comic) {
        document.getElementById("homepage").style.display = "none"
        document.getElementById("comic-container").style.animationName = "comic"
        document.getElementById("comic-container").style.animationDuration = "2.5s"
        setTimeout(() => {
            document.getElementById("comic-container").style.display = "none"
            comic = false
          }, 2500)
        dialogue_status = true;
    }

    movement_speed = 6;

    if (playerhit) {
        frameCount++;
        if (frameCount >= FRAME_LIMIT) {
            frameCount = 0;
            currentLoopIndex++;
            if (currentLoopIndex >= CYCLE_LOOP.length) {
                currentLoopIndex = 0;
                playerhit = false;
            }
        }
    }

    if (hasMoved || playerhit || dead_status) {
        //console.log("positionX: ", positionX);
        //console.log("positionY: ", positionY);
        frameCount++;
        if (frameCount >= FRAME_LIMIT) {
            frameCount = 0;
            currentLoopIndex++;
            if (currentLoopIndex >= CYCLE_LOOP.length) {
                currentLoopIndex = 0;
                if (playerhit) { playerhit = false }
                if (dead_status) { dead_status = false }
            }
        }
    }

    if (fight_status) {
        frameCount_monster++;
        if (frameCount_monster >= FRAME_LIMIT) {
            frameCount_monster = 0;
            currentLoopIndex_monster++;
            if (currentLoopIndex_monster >= CYCLE_LOOP_MONSTER.length) {
                currentLoopIndex_monster = 0;
            }
        }
    }

    if (!hasMoved && !playerhit && !dead_status) {
        if (hp_sander <= 0) { currentLoopIndex = 3 }
        else { currentLoopIndex = 0 }
    }

    for (var i = 0; i < objposX.length; i++) {
        if (!objposXY.includes(((objposX[i] - positionX - (SCALED_WIDTH / 2)) ** 2 + (objposY[i] - positionY - (SCALED_WIDTH / 2)) ** 2) ** (1 / 2))) {
            objposXY.push([Math.floor(((objposX[i] - positionX - (SCALED_WIDTH / 2)) ** 2 + (objposY[i] - positionY - (SCALED_WIDTH / 2)) ** 2) ** (1 / 2)), i]);
        }
    }

    objposXY.sort(function (a, b) {
        return a[0] - b[0]
    });

    if (objposY[objposXY[0][1]] - positionY - SCALED_WIDTH >= 0) {
        objstatus = true;
    }
    if (objstatus && checkpoint != 4) {
        bg = currentBg_;
        drawBg();
        drawBullet();
        if (checkpoint == 1 && extrax[0] != -162 && positionY >= extray[0]) { ctx.fillRect(extrax[0], extray[0], 162, 162) }
        if (currentEvent >= 4 && positionY >= extray[1]) { ctx.fillRect(extrax[1], extray[1], 162, 162) }
        if (currentEvent == 5 && !dialogue_status && !inventory.includes("sword") && positionY + 162 >= 162 + 120) { ctx.drawImage(sword, 1140, 162, 96, 120) }
        if (fight_status && checkpoint == 2 && (positionY + 162 >= monster_posy[0] + (226.25 * (3 / 4)))) {
            drawFrame(worm, CYCLE_LOOP_MONSTER[currentLoopIndex_monster], monster_action, monster_posx[0], monster_posy[0], 512, 452.5, 324, 226.25);
        }
        if (checkpoint == 2 & worm_check && !fight_status && (positionY + 162 >= monster_posy[0] + (226.25 * (3 / 4)))) { ctx.drawImage(worm, 3 * 512, 4 * 452.5, 512, 452.5, monster_posx[0], monster_posy[0], 324, 226.25) }
        drawFrame(sander_current, CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY, 512, 512, 162, 162);
        if (currentEvent == 5 && !dialogue_status && !inventory.includes("sword") && positionY + 162 < 162 + 120) { ctx.drawImage(sword, 1140, 162, 96, 120) }
        if (checkpoint == 1 && extrax[0] != -162 && positionY < extray[0]) { ctx.fillRect(extrax[0], extray[0], 162, 162) }
        if (currentEvent < 4 || (currentEvent >= 4 && (positionY < extray[1]))) { ctx.fillRect(extrax[1], extray[1], 162, 162) }
        if (fight_status && checkpoint == 2 && (positionY + 162 < monster_posy[0] + (226.25 * (3 / 4)))) {
            drawFrame(worm, CYCLE_LOOP_MONSTER[currentLoopIndex_monster], monster_action, monster_posx[0], monster_posy[0], 512, 452.5, 324, 226.25);
        }
        if (checkpoint == 2 && worm_check && !fight_status && (positionY + 162 < monster_posy[0] + (226.25 * (3 / 4)))) { ctx.drawImage(worm, 3 * 512, 4 * 452.5, 512, 452.5, monster_posx[0], monster_posy[0], 324, 226.25) }
        drawObj();
    }
    else if (currentEvent < 4) {
        bg = currentBg_;
        drawBg();
        ctx.fillRect(extrax[1], extray[1], 162, 162)
        if (checkpoint == 1 && extrax[0] != -162 && positionY >= extray[0]) { ctx.fillRect(extrax[0], extray[0], 162, 162) }
        drawObj()
        drawFrame(sander_current, CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY, 512, 512, 162, 162);
        if (checkpoint == 1 && extrax[0] != -162 && positionY < extray[0]) { ctx.fillRect(extrax[0], extray[0], 162, 162) }
    }
    else {
        bg = currentBg;
        drawBg();
        drawBullet();
        if (currentEvent >= 4) {
            if (positionY >= extray[1]) { ctx.fillRect(extrax[1], extray[1], 162, 162) }
        }
        if (currentEvent == 5 && !dialogue_status && !inventory.includes("sword") && positionY + 162 >= 162 + 120) {
            ctx.drawImage(sword, 1140, 162, 96, 120)
        }
        if (fight_status && checkpoint == 2 && (positionY + 162 >= monster_posy[0] + (226.25 * (3 / 4)))) {
            drawFrame(worm, CYCLE_LOOP_MONSTER[currentLoopIndex_monster], monster_action, monster_posx[0], monster_posy[0], 512, 452.5, 324, 226.25);
        }
        if (checkpoint == 2 && worm_check && !fight_status && (positionY + 162 >= monster_posy[0] + (226.25 * (3 / 4)))) { ctx.drawImage(worm, 3 * 512, 4 * 452.5, 512, 452.5, monster_posx[0], monster_posy[0], 324, 226.25) }
        if (checkpoint == 4 && !axeon_check && !fight_status && (positionY + 162 >= monster_posy[1] + 300)) {
            ctx.drawImage(axeon, 0 * 512, 3 * 512, 512, 512, monster_posx[1], monster_posy[1], 324, 324)
        }
        if (checkpoint == 4 && axeon_check && !fight_status && (positionY + 162 >= monster_posy[1] + 300)) {
            ctx.drawImage(axeon, 3 * 512, 7 * 512, 512, 512, monster_posx[1], monster_posy[1], 324, 324)
        }
        if (checkpoint == 4 && fight_status && (positionY + 162 >= monster_posy[1] + 300)) {
            drawFrame(axeon, CYCLE_LOOP_MONSTER[currentLoopIndex_monster], monster_action, monster_posx[1], monster_posy[1], 512, 512, 324, 324);
        }
        if (checkpoint == 5 && fight_status && (positionY + 162 >= monster_posy[2] + 174)) {
            drawFrame(bunchun, CYCLE_LOOP_MONSTER[currentLoopIndex_monster], monster_action, monster_posx[2], monster_posy[2], 512, 512, 192, 192);
        }
        drawFrame(sander_current, CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY, 512, 512, 162, 162);
        if (currentEvent == 5 && !dialogue_status && !inventory.includes("sword") && positionY + 162 < 162 + 120) {
            ctx.drawImage(sword, 1140, 162, 96, 120)
        }
        if (currentEvent < 4 || (currentEvent >= 4 && (positionY < extray[1]))) {
            ctx.fillRect(extrax[1], extray[1], 162, 162)
        }
        if (fight_status && checkpoint == 2 && (positionY + 162 < monster_posy[0] + (226.25 * (3 / 4)))) {
            drawFrame(worm, CYCLE_LOOP_MONSTER[currentLoopIndex_monster], monster_action, monster_posx[0], monster_posy[0], 512, 452.5, 324, 226.25);
        }
        if (checkpoint == 2 && worm_check && !fight_status && (positionY + 162 < monster_posy[0] + (226.25 * (3 / 4)))) { ctx.drawImage(worm, 3 * 512, 4 * 452.5, 512, 452.5, monster_posx[0], monster_posy[0], 324, 226.25) }
        if (checkpoint == 4 && !axeon_check && !fight_status && (positionY + 162 < monster_posy[1] + 300)) {
            ctx.drawImage(axeon, 0 * 512, 3 * 512, 512, 512, monster_posx[1], monster_posy[1], 324, 324)
        }
        if (checkpoint == 4 && axeon_check && !fight_status && (positionY + 162 < monster_posy[1] + 300)) {
            ctx.drawImage(axeon, 3 * 512, 7 * 512, 512, 512, monster_posx[1], monster_posy[1], 324, 324)
        }
        if (checkpoint == 4 && fight_status && (positionY + 162 < monster_posy[1] + 300)) {
            drawFrame(axeon, CYCLE_LOOP_MONSTER[currentLoopIndex_monster], monster_action, monster_posx[1], monster_posy[1], 512, 512, 324, 324);
        }
        if (checkpoint == 5 && fight_status && (positionY + 162 < monster_posy[2] + 174)) {
            drawFrame(bunchun, CYCLE_LOOP_MONSTER[currentLoopIndex_monster], monster_action, monster_posx[2], monster_posy[2], 512, 512, 192, 192);
        }
    }

    if (fight_status) {
        drawBlood();
    }
    if (!dialogue_status) {
        drawProfile(50, 265);
        document.getElementById("inner").style.opacity = "1";
        drawWeapon(50, 860);
    }
    if (dialogue_status) {
        document.getElementById("inner").style.opacity = "0";
    }

    /* GAME EVENT Bg1 */
    if (positionX >= 480 && currentEvent == 0) {
        dialogue_status = true;
        words = ["ทหารไก่:นั่นใครน่ะ?! มาทำอะไรแถวนี้!", "ทหารไก่:มาใกล้ๆ นี่สิ ฉันจะได้เห็นหน้าแกชัดๆ"]
        currentEvent = 1;
    }
    if (positionX >= 970 && positionY >= 276 && positionY <= 510 && currentEvent == 1) {
        dialogue_status = true;
        words = ["ทหารไก่:น่ะ นี่มัน ท่านแซนเดอร์", "ทหารไก่:ท่านครับ ให้อภัยผมด้วย ผมผิดไปแล้ว!"]
        currentEvent = 2;
    }
    if (currentEvent >= 2 && (words_index == 1 || !dialogue_status) && extrax[0] != -162) {
        extrax[0] -= 12
    }
    if ((Math.abs(positionX - extrax[1]) >= 660 || (positionX >= 1600 && positionY > 426)) && extrax[0] <= -162 && currentEvent == 2 && !dialogue_status) {
        dialogue_status = true;
        words = ["ฮาดาว:เดี๋ยวก่อน เจ้าน่ะ จะไปไหน!", "ฮาดาว:คิดจะไปโดยไม่ช่วยข้าหรอ ใจดำจริงๆ", "ฮาดาว:เมื่อกี้ข้าเห็นไอ้ทหารนั่นมันโยนกุญแจไว้แถว<br>พงหญ้านั่น เจ้าช่วยไปหามาหน่อยสิ"]
        currentEvent = 3;
    }
    if ((positionY <= 150 && positionX <= 72) && currentEvent == 3) {
        if (!inventory.includes("key")) {
            ctx.drawImage(key, positionX + 144, positionY + 42)
            if (keyPresses.KeyF && !inventory.includes("key")) { inventory.push("key") }
        }
    }
    if (inventory.includes("key") && currentEvent == 3) {
        if (positionX >= 1260 && positionY >= 6 && positionY <= 228) {
            ctx.drawImage(usekey, positionX + 144, positionY + 42)
            if (keyPresses.KeyF) { currentEvent = 4 }
        }
    }
    if (currentEvent >= 4 && currentEvent <= 5 && extrax[1] != 1242) {
        dialogue_status = true;
        words = ["ฮาดาว:เฮ้อ...รอดตายแล้วสิ ขอบใจเจ้ามาก", "แซนเดอร์:เกิดอะไรขึ้นที่นี่กันแน่? เจ้าช่วยเล่าให้ข้าฟังทีสิ", "ฮาดาว:เจ้าไปอยู่ที่ไหนมาถึงได้ไม่รู้เรื่องอะไรเลย",
            "ฮาดาว:ก็พวกไก่ชาติอื่นน่ะสิ มันไม่ยอมให้ไก่ชาติไทย<br>ใช้อวกาศร่วมกับพวกมัน", "ฮาดาว:พวกเราได้ทำการประท้วงและต่อต้าน พวกมันจึง<br>คิดจะกำจัดข้าที่เป็นแกนนำเพื่อจบเรื่อง",
            "ฮาดาว:แต่เจ้าดันมาช่วยข้าไว้ได้ซะก่อน", "ฮาดาว:ดูจากที่พวกมันเห็นเจ้าแล้วรีบหนีไปแบบนั้น<br>แสดงว่าเจ้าคงจะพอมีฝีมือสินะ", "ฮาดาว:สนใจเข้าร่วมกลุ่มกับพวกข้า เพื่อให้ไก่ชาติไทย<br>ได้ใช้อวกาศอีกครั้งมั้ยล่ะ",
            "แซนเดอร์:เอาสิ...ในเมื่อข้าไม่มีที่ไปอยู่แล้ว ข้าจะเป็นกำลัง<br>ให้พวกเจ้าเอง", "ฮาดาว:เป็นคำตอบที่ดี! ถ้างั้นข้าจะมอบอาวุธนี้ให้กับ<br>เจ้าไปใช้ต่อสู้กับพวกไก่เผด็จการนั่นละกัน"]
        extrax[1] -= 6
        currentEvent = 5
    }
    if (positionX >= 1008 && positionX <= 1182 && positionY >= 66 && positionY <= 180 && currentEvent == 5 && !dialogue_status && !inventory.includes("sword")) {
        ctx.drawImage(swordf, positionX + 144, positionY + 42)
        if (keyPresses.KeyF && !inventory.includes("sword")) {
            inventory.push("sword")
            sword_status = true
            currentEvent = 6
        }
    }
    if (currentEvent == 6) {
        dialogue_status = true;
        words = ["ฮาดาว:เพื่อเป็นการทดสอบความจริงใจของเจ้า<br>ข้าหวังว่าจะเจอเจ้าที่ค่ายของพวกเรานะ", "ฮาดาว:หวังว่าเจ้าจะไม่ผิดคำพูด"]
        currentEvent = 7
    }
    if (currentEvent >= 7 && currentEvent <= 8 && !dialogue_status) {
        if (extray[1] == 138) { document.getElementById("myModal").style.display = "ืnone" }
        if (extray[1] < 648) { extray[1] += 6 }
        else if (extrax[1] < 2000) { extrax[1] += 6 }
        currentEvent = 8
    }

    /* GAME EVENT Bg2 */
    if (currentEvent == 8 && checkpoint == 2 && positionX >= 1280) { fight_status = true }

    /* GAME EVENT Bg3 */

    /* GAME EVENT Bg4 */
    if (checkpoint == 4 && positionX >= 990 && positionX <= 1150 && positionY >= 400 && positionY <= 565 && currentEvent == 8 && !dialogue_status && !axeon_check) {
        ctx.drawImage(axeonf, positionX + 144, positionY + 42)
        if (keyPresses.KeyF && currentEvent == 8) {
            dialogue_status = true
            words = ["แอ็กซีออน:บลาบลาบลาบลาบลา", "แซนเดอร์:บลาบลาบลาบลาบลา", "แอ็กซีออน:บลาบลาบลาบลาบลา"]
            currentEvent = 9
        }
    }
    if (currentEvent == 9 && !dialogue_status && positionX >= 990 && positionX <= 1150) {
        fight_status = true;
    }

    /* GAME EVENT Bg5 */
    if (currentEvent == 9 && !dialogue_status && checkpoint == 5) {
        dialogue_status = true
        words = ["มินิบอส:บลาบลาบลาบลาบลา", "แซนเดอร์:บลาบลาบลาบลาบลา", "มินิบอส:บลาบลาบลาบลาบลา"]
        currentEvent = 10
    }
    if (currentEvent == 10 && !dialogue_status) { fight_status = true }

    if (fight_status) {
        document.getElementById("information").style.display = "none"
    }
    else {
        document.getElementById("information").style.display = "flex"
    }

    if (checkpoint == 2) {
        if (monster_move && fight_status && monster_posy[0] < positionY) {
            monster_posy[0] += monster_speed;
            monster_action = 2;
        }
        if (monster_move && fight_status && monster_posy[0] > positionY) {
            monster_posy[0] -= monster_speed;
            monster_action = 0;
        }
        if (monster_move && fight_status && monster_posx[0] < positionX && positionY + 81 >= monster_posy[0] && positionY + 81 <= monster_posy[0] + 324) {
            monster_posx[0] += monster_speed / 2;
            monster_action = 1;
        }
        if (monster_move && fight_status && monster_posx[0] > positionX && positionY + 81 >= monster_posy[0] && positionY + 81 <= monster_posy[0] + 324) {
            monster_posx[0] -= monster_speed / 2;
            monster_action = 3
        }
        if (fight_status && Math.abs(((positionX + (162 / 2))) - (monster_posx[0] + (324 / 2))) <= ((162 / 2) + (324 / 2)) - 60 && Math.abs((positionY + (162 / 2)) - (monster_posy[0] + (226.25 / 2))) <= 100) {
            if (monster_move) {
                currentLoopIndex_monster = 0
                monster_move = false
            }
            monster_attack = true;
        }
    }

    if (checkpoint == 4) {
        monster_speed = 4
        if (monster_move && fight_status && monster_posy[1] + 305 < positionY + 162) {
            monster_posy[1] += monster_speed;
            monster_action = 2;
        }
        if (monster_move && fight_status && monster_posy[1] + 305 > positionY + 162) {
            monster_posy[1] -= monster_speed;
            monster_action = 0;
        }
        if (monster_move && fight_status && monster_posx[1] + (324 / 2) < positionX + (162 / 2) && (positionY + 162 >= monster_posy[1] + 305 || positionY <= monster_posy[1] + 162) && !((monster_posx[1] + ((1 / 2) * 324) - 81 < positionX + (162 / 2)) && (monster_posx[1] + ((1 / 2) * 324) + 81 > positionX + (162 / 2)))) {
            if (monster_action == 2 || monster_action == 0) { monster_speed /= Math.sqrt(2) }
            monster_posx[1] += monster_speed;
            monster_action = 1;
        }
        if (monster_move && fight_status && monster_posx[1] + (324 / 2) > positionX + (162 / 2) && (positionY + 162 >= monster_posy[1] + 305 || positionY <= monster_posy[1] + 162) && !((monster_posx[1] + ((1 / 2) * 324) - 81 < positionX + (162 / 2)) && (monster_posx[1] + ((1 / 2) * 324) + 81 > positionX + (162 / 2)))) {
            if (monster_action == 2 || monster_action == 0) { monster_speed /= Math.sqrt(2) }
            monster_posx[1] -= monster_speed;
            monster_action = 3
        }
        if (fight_status && temp_x == 0 && temp_y == 0 && (((((positionX + 81) - (monster_posx[1] + 162)) ** 2) + ((positionY + 81) - (monster_posy[1] + 162)) ** 2)) ** 0.5 >= 450) {
            temp_x = positionX + 81 - monster_posx[1] - 162
            temp_y = positionY + 25 - monster_posy[1] - 162
            posatmx = positionX + 81
            posatmy = positionY + 25
            if (temp_x >= 0) {
                temp_x += 100
                posatmx += 100
            }
            else {
                temp_x -= 100
                posatmx -= 100
            }
            if (temp_y >= 0) {
                temp_y += 25
                posatmy += 25
            }
            else {
                temp_y -= 25
                posatmy -= 25
            }
            if (monster_move) {
                currentLoopIndex_monster = 0
                monster_move = false
            }
            monster_attack = true
        }
        else if (fight_status && Math.abs((positionX + 81) - (monster_posx[1] + 162)) <= 100 && Math.abs((positionY + 40) - (monster_posy[1] + 162)) <= 100) {
            if (monster_move) {
                currentLoopIndex_monster = 0
                monster_move = false
            }
            monster_attack = true
        }
    }

    if (checkpoint == 5) {
        if (monster_bulletx == -100 && Math.abs((positionX + 81) - (monster_posx[2] + 96)) >= 250 && currentLoopIndex_monster == 3) {
            if (monster_action != 4) {
                currentLoopIndex_monster = 0
            }
            monster_action = 4
            monster_attack = true
            monster_bulletx = monster_posx[2]
        }
        if (Math.abs((positionX + 81) - (monster_posx[2] + 96)) < 250) {
            if (monster_action != 5) {
                currentLoopIndex_monster = 0
            }
            monster_action = 5
            monster_attack = true
        }
    }

    if (fight_status && monster_attack && hp_monster > 0 && hp_sander > 0) {
        if (checkpoint == 2) {
            if (positionX >= monster_posx[0]) { monster_action = 6 }
            else { monster_action = 5 }
        }

        if (checkpoint == 4) {
            if (fight_status && (monster_action != 5 && monster_action != 6) && Math.abs((positionX + 81) - (monster_posx[1] + 162)) <= 100 && Math.abs((positionY + 40) - (monster_posy[1] + 162)) <= 100) {
                if (monster_posy[1] + 162 > positionY + 81) {
                    monster_action = 8;
                }
                else {
                    monster_action = 4;
                }
            }
            else if ((((((posatmx) - (monster_posx[1] + 162)) ** 2) + ((posatmy) - (monster_posy[1] + 162)) ** 2)) ** 0.5 >= 50 && (monster_action != 4 && monster_action != 8)) {
                if (monster_posx[1] > positionX && monster_action != 6) { monster_action = 5 }
                else if (monster_posx[1] < positionX && monster_action != 5) { monster_action = 6 }
                monster_posx[1] += temp_x / 25
                monster_posy[1] += temp_y / 25
            }
            if ((((((posatmx) - (monster_posx[1] + 162)) ** 2) + ((posatmy) - (monster_posy[1] + 162)) ** 2)) ** 0.5 <= 50) {
                temp_x = 0
                temp_y = 0
                posatmx = 0
                posatmy = 0
            }
        }

        if (checkpoint == 5) {
            if (monster_action == 4 || (monster_action != 4 && monster_bulletx >= -100)) { monster_bulletx -= 12 }
            if ((Math.abs(monster_bulletx - positionX) <= 250) || (monster_action == 5 && monster_bulletx >= -100)) {
                ctx.drawImage(bunchun_action4, 1 * 170, 0, 170, 900, monster_bulletx, 350, 100, 529)
            }
            if ((Math.abs(monster_bulletx - positionX) <= 150) || (monster_action == 5 && monster_bulletx >= -100)) {
                ctx.drawImage(bunchun_action4, 2 * 170, 0, 170, 900, monster_bulletx, 350, 100, 529)
            }
            else {
                ctx.drawImage(bunchun_action4, 0 * 170, 0, 170, 900, monster_bulletx, 350, 100, 529)
            }
            if (monster_bulletx <= -100) { monster_bulletx = -100 }
            if (currentLoopIndex_monster == 3 && monster_action == 5) {
                ctx.drawImage(bunchun_zeri, monster_posx[2] - 115, monster_posy[2] - 50, 420, 287)
            }
        }

        /* ตีเข้ามอน */
        if (fight_status && hp_monster > 0 && hp_sander > 0 && playerhit && currentLoopIndex >= 2 && currentLoopIndex <= 3) {
            if ((Math.abs(((positionX + (162 / 2))) - (monster_posx[0] + (324 / 2))) <= ((162 / 2) + (324 / 2)) - 60 && Math.abs((positionY + (162 / 2)) - (monster_posy[0] + (226.25 / 2))) <= 100) ||
                (Math.abs((positionX + 81) - (monster_posx[1] + 162)) <= 100 && Math.abs((positionY + 40) - (monster_posy[1] + 162)) <= 100 && (monster_action == 4 || monster_action == 8)) ||
                (Math.abs((positionX + 81) - (monster_posx[1] + 162)) <= 80 && Math.abs((positionY + 40) - (monster_posy[1] + 162)) <= 60 && (monster_action == 5 || monster_action == 6))) {
                if (((monster_posy[0] < positionY && currentDirection == FACING_UP) || (monster_posy[1] < positionY && currentDirection == FACING_UP)) ||
                    ((monster_posy[0] > positionY && currentDirection == FACING_DOWN) || (monster_posy[1] > positionY && currentDirection == FACING_DOWN)) ||
                    ((monster_posx[0] < positionX && currentDirection == FACING_LEFT) || (monster_posx[1] < positionX && currentDirection == FACING_LEFT)) ||
                    ((monster_posx[0] > positionX && currentDirection == FACING_RIGHT) || (monster_posx[1] > positionX && currentDirection == FACING_RIGHT))) {
                    monster_takedmg = true
                }
            }
        }
        else { monster_takedmg = false }

        if (monster_takedmg) {
            hp_monster -= 1;
            if (checkpoint == 2) { drawFrame(worm_damage, CYCLE_LOOP_MONSTER[currentLoopIndex_monster], monster_action, monster_posx[0], monster_posy[0], 512, 452.5, 324, 226.25) }
            if (checkpoint == 4) { drawFrame(axeon_damage, CYCLE_LOOP_MONSTER[currentLoopIndex_monster], monster_action, monster_posx[1], monster_posy[1], 512, 512, 324, 324) }
            if (hp_monster <= 0) {
                currentLoopIndex_monster = 0;
                if (checkpoint == 2) { monster_action = 4 }
                if (checkpoint == 4) { monster_action = 7 }
            }
        }

        if (fight_status && hp_monster > 0 && hp_sander > 0 && monster_attack && currentLoopIndex_monster >= 2 && currentLoopIndex_monster <= 3) {
            if (((Math.abs(((positionX + (162 / 2))) - (monster_posx[0] + (324 / 2))) <= ((162 / 2) + (324 / 2)) - 60 && Math.abs((positionY + (162 / 2)) - (monster_posy[0] + (226.25 / 2))) <= 100 && !worm_check)) ||
                (Math.abs((positionX + 81) - (monster_posx[1] + 162)) <= 100 && Math.abs((positionY + 40) - (monster_posy[1] + 162)) <= 100 && (monster_action == 4 || monster_action == 8) && !axeon_check) ||
                (Math.abs((positionX + 81) - (monster_posx[1] + 162)) <= 80 && Math.abs((positionY + 40) - (monster_posy[1] + 162)) <= 60 && (monster_action == 5 || monster_action == 6) && !axeon_check)) {
                player_takedmg = true;
            }
        }
        else { player_takedmg = false }

        if (player_takedmg) {
            if (checkpoint == 2) { hp_sander -= 0.5 }
            if (checkpoint == 4) {
                if (monster_action == 4 || monster_action == 8) { hp_sander -= 0.5 }
                else { hp_sander -= 1 }
            }
            if (sander_current == sander) {
                drawFrame(sander_damage, CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY, 512, 512, 162, 162);
            }
            if (sander_current == sander_sword) {
                drawFrame(sander_sword_damage, CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY, 512, 512, 162, 162);
            }
            if (hp_sander <= 0) {
                dead_status = true;
                currentLoopIndex = 0;
                currentDirection = 4;
            }
        }

        if (currentLoopIndex_monster > 3) {
            if (checkpoint == 2) {
                monster_attack = false;
                monster_move = true;
            }
            if (checkpoint == 4) {
                monster_attack = false;
                monster_move = true;
            }
        }
    }

    /* เช็คมอน */
    if (fight_status && hp_monster <= 0) {
        if (currentLoopIndex_monster > 3) { fight_status = false }
        if (checkpoint == 2 && !worm_check) { worm_check = true }
        if (checkpoint == 4 && !axeon_check) { axeon_check = true }
    }

    if (fight_status && hp_sander <= 0) {
        fight_status = false
        monster_attack = false
        monster_move = true
    }

    document.getElementsByClassName("close")[0].onclick = function () {
        document.getElementById("myModal").style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "none";
        }
    }

    if (hp_sander <= 0) {
        document.getElementById("dead").style.display = "flex";
    }
    else {
        document.getElementById("dead").style.display = "none";
    }
    if (fade_status) { fade() }
    if (dialogue_status) { dialogue() }

    window.requestAnimationFrame(gameLoop);
    objstatus = false;
    objposX = [];
    objposY = [];
    objposXY = [];
}

function moveCharacter(deltaX, deltaY, direction) {
    if (positionX + 24 + deltaX > 0 && positionX + SCALED_WIDTH - 24 + deltaX < canvas.width) {
        positionX += deltaX;
    }
    if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
        positionY += deltaY;
    }
    currentDirection = direction;
}

function walkCollison(rectposx, rectposy, rectw, recth) {
    if (keyPresses.KeyW && positionX + 138 > rectposx && positionX + 24 + 6 < rectposx + rectw
        && positionY > rectposy - 126 && positionY < rectposy) {
        movement_speed = 0;
    }
    if (keyPresses.KeyA && positionX + 138 > rectposx && positionX + 24 < rectw + rectposx + 3
        && positionY + 126 > rectposy && positionY + 126 < recth + rectposy) {
        movement_speed = 0;
    }
    if (keyPresses.KeyS && positionX + 138 > rectposx && positionX + 24 + 9 < rectposx + rectw
        && positionY + 126 + 6 > rectposy && positionY < rectposy + recth - 126) {
        movement_speed = 0;
    }
    if (keyPresses.KeyD && positionX + 138 + 6 > rectposx && positionX + 24 + 18 < rectposx + rectw
        && positionY + 126 > rectposy && positionY + 126 < recth + rectposy) {
        movement_speed = 0;
    }
    objposX.push(rectposx + (rectw / 2));
    objposY.push(rectposy + (recth));
}

function drawStroked(text, size, linew, x, y) {
    ctx.font = size + " Bai Jamjuree";
    ctx.strokeStyle = "white";
    ctx.lineWidth = linew;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = "black";
    ctx.fillText(text, x, y);
}

function drawBlood() {
    if (checkpoint == 2) { drawStroked("เดอะ ดวนนี่ หนอนยักษ์ดึ้บดึ้บ", "30px", 6, 500, 910) }
    if (checkpoint == 4) { drawStroked("แอ็กซีออนที่ 10 ผู้อารักขาฐานลับ", "30px", 6, 500, 910) }
    if (checkpoint == 5) { drawStroked("เดอะ บุนชุน โคชุ อัศวินเกราะเคลือบเผ็ด", "30px", 6, 500, 910) }
    ctx.fillStyle = "white"
    ctx.fillRect(500, 932, 901, 44)
    ctx.fillStyle = "black"
    ctx.fillRect(505, 937, 891, 34)
    ctx.fillStyle = "red"
    ctx.fillRect(510, 942, hp_monster * 5.87, 24)
}

function drawProfile(x, y) {
    if (positionX - 50 <= 500 && positionY - 265 <= 20) {
        x = 1980 - 50 - (sander_pf_st.width) - 370;
    }
    ctx.drawImage(sander_pf_st, x, y - sander_pf_st.height - 50, sander_pf_st.width, sander_pf_st.height);
    drawStroked("แซนเดอร์", "32px", 6, x + sander_pf_st.width + 10, y - sander_pf_st.height - 50 + 35);
    ctx.fillStyle = "white";
    ctx.fillRect(x + sander_pf_st.width, y - sander_pf_st.height, (hp_max * 2.95) + 6, 30);
    ctx.fillStyle = "black";
    ctx.fillRect((x - 3) + sander_pf_st.width, y - sander_pf_st.height + 5, (hp_max * 2.95) + 5, 20);
    ctx.fillStyle = "red";
    ctx.fillRect((x - 3) + sander_pf_st.width, y - sander_pf_st.height + 10, hp_sander * 2.95, 10);
    ctx.fillStyle = "white";
    ctx.fillRect(x + sander_pf_st.width, y - sander_pf_st.height + 38, 152, 30);
    ctx.fillStyle = "black";
    ctx.fillRect((x - 3) + sander_pf_st.width, y - sander_pf_st.height + 5 + 38, 150, 20);
    ctx.fillStyle = "yellow";
    ctx.fillRect((x - 3) + sander_pf_st.width, y - sander_pf_st.height + 10 + 38, energy, 10);
}

function drawWeapon(x, y) {
    if (positionX - 50 <= 400 && Math.abs(positionY - 860) <= 250 && fight_status) {
        x = 1980 - 50 - (sander_pf_st.width) - 255;
        document.getElementsByClassName("weapon-box")[0].style.transform = "translateX(121.8vh)"
    }
    else if (positionX - 50 <= 400 && Math.abs(positionY - 860) <= 250 && !fight_status) {
        x = 1980 - 50 - (sander_pf_st.width) - 255;
        document.getElementsByClassName("weapon-box")[0].style.transform = "translateX(121.8vh)"
    }
    else {
        document.getElementsByClassName("weapon-box")[0].style.transform = "translateX(0vh)"
    }
    drawStroked("อาวุธมือซ้าย", "26px", 6, x + 10, 860 - 15);
    drawStroked("อาวุธมือขวา", "26px", 6, x + 15 + 166 + 28, 860 - 15);
    if (lefthand == "sword") {
        ctx.drawImage(sword, x + 20, 870, 124, 155)
    }
    if (righthand == "sword") {
        ctx.drawImage(sword, x + 215, 870, 124, 155)
    }
    if (lefthand == "gun") {
        ctx.drawImage(gun, x + 20, 870, 124, 155)
    }
    if (righthand == "gun") {
        ctx.drawImage(gun, x + 215, 870, 124, 155)
    }
}

function drawBullet() {
    for (let i = 0; i < bullet_posxy.length; i++) {
        if (bullet_posxy[i][1] <= 0) {
            bullet_posxy.splice(i, 1);
            i--; //ลบไปแล้วถอยหลังกลับมาที่ i
            continue;
        }
        if (bullet_posxy[i][2] == FACING_UP) {
            bullet_posxy[i][1] -= 18;
            bullet = bullet_w;
        }
        if (bullet_posxy[i][2] == FACING_DOWN) {
            bullet_posxy[i][1] += 18;
            bullet = bullet_s;
        }
        if (bullet_posxy[i][2] == FACING_RIGHT) {
            bullet_posxy[i][0] += 18;
            bullet = bullet_d;
        }
        if (bullet_posxy[i][2] == FACING_LEFT) {
            bullet_posxy[i][0] -= 18;
            bullet = bullet_a;
        }
        if (bullet_posxy[i][3] > 3) {
            bullet_posxy[i][3] = 3;
        }
        ctx.drawImage(bullet,
            bullet_posxy[i][3] * 162, 162 * (0), 162, 162,
            bullet_posxy[i][0], bullet_posxy[i][1], 162, 162);
        bullet_posxy[i][3] += 1;
    }
}

function fade() {
    if (fade_status) {
        alpha += delta;
        if (alpha <= 0 || alpha >= 1) delta = -delta;
        ctx.globalAlpha = alpha;
        ctx.fillRect(0, 0, 0, 0);
        if (delta <= 0) {
            fade_status = false;
            ctx.globalAlpha = 1;
            alpha = 0
            delta = 0.025;
        }
    }
}

function dialogue() {
    if (!fade_status && document.getElementById("comic-container").style.display == "none") {
        ctx.drawImage(sander_dia, (myCanvas.width / 2) - (sander_dia.width / 2), 685, sander_dia.width, sander_dia.height);
        if (count + 1 < words[words_index].length) { count++; }
        ctx.fillStyle = "white"
        ctx.font = "36px Bai Jamjuree";

        if (!words[words_index].includes("<br>")) {
            chars1 = (words[words_index].slice(words[words_index].indexOf(":") + 1, words[words_index].length)).substr(0, count);
            ctx.fillText(chars1, 764, 925);
        }
        else {
            chars1 = (words[words_index].slice(words[words_index].indexOf(":") + 1, words[words_index].indexOf("<"))).substr(0, count);
            if (count >= words[words_index].indexOf("<") && count <= words[words_index].length) {
                chars2 = words[words_index].slice(words[words_index].indexOf(">") + 1, count + 1)
                ctx.fillText(chars2, 764, 925 + 30);
            }
            ctx.fillText(chars1, 764, 925 - 30);
        }

        if (count < words[words_index].length - 1 && (keyPresses.Space || mouseclick)) { count = words[words_index].length - 1 }
        if (count == words[words_index].length - 1 && (!keyPresses.Space && !mouseclick)) { allowNextdialogue = true; }
        if (allowNextdialogue && (keyPresses.Space || mouseclick)) { nextdialogue = true; }
        if (nextdialogue && (!keyPresses.Space && !mouseclick)) {
            allowNextdialogue = false
            nextdialogue = false
            count = 0
            if (words_index + 1 == words.length) {
                words_index = 0
                dialogue_status = false
            }
            else if (words_index + 1 < words.length) { words_index++ }
        }
    }
}