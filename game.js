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

let movement_speed = 6;
let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");
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
let sander_damage = new Image();
let sander_sword_damage = new Image();
let sander_weapon_damage = new Image();

let sander_dia = new Image();
let extra0_dia = new Image();
let extra1_dia = new Image();
let wichian_dia = new Image();
let axeon_dia = new Image();
let bunchun_dia = new Image();
let mcdo_dia = new Image();

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
let bg4_1 = new Image();
let bg5 = new Image();
let bg5_1 = new Image();
let bg6 = new Image();
let bg6_1 = new Image();
let bg6_dark = new Image();

let bg1_obj1 = new Image();
let bg2_obj1 = new Image();
let bg3_obj1 = new Image();
let bg4_obj1 = new Image();
let bg5_obj1 = new Image();
let bg6_obj1 = new Image();

//เปลี่ยนตรงนี้เพื่อวาร์ป
let run = false;
let comic = false;
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

let alpha = 0,
  delta = 0.025;
let fade_status = false;
let sword_status = false;
let gun_status = false;

let dialogue_status = false;
let words = [
  "sander:โอ้ย...ที่นี่มันที่ไหนเนี่ย ปวดหัวชะมัดเลย",
  "sander:แปลกมาก ทำไมถึง...จำอะไรไม่ได้เลยล่ะ?",
];
let words_index = 0;
let count = 0;
let chars;
let textx = 788;
let texty = 925;
let allowNextdialogue = false;
let nextdialogue = false;

let box1 = new Image();
let box2 = new Image();
let extra0 = new Image();
let extra1 = new Image();
let extra2 = new Image();
let extra3 = new Image();
let extra4 = new Image();
let extrax = [1260, 1614];
let extray = [390, 132];
let currentLoopIndex_extra = 0;
let frameCount_extra = 0;

let inventory = [];
let key = new Image();
let usekey = new Image();
let sword = new Image();
let swordf = new Image();
let gun = new Image();
let wormf = new Image();
let bunchunf = new Image();
let wichianf = new Image();
let hadaof = new Image();
let lefthand = undefined;
let lefthand_current = undefined;
let righthand = undefined;
let righthand_current = undefined;
let playerhit = false;
let sword_inhand = new Image();
let gunL = new Image();

let worm = new Image();
let axeon = new Image();
let worm_damage = new Image();
let axeon_damage = new Image();
let axeonf = new Image();
let bunchun = new Image();
let bunchun_damage = new Image();
let bunchun_action4 = new Image();
let bunchun_zeri = new Image();
let mcdo = new Image();
let mcdo_damage = new Image();
let boss_bulletr = new Image();
let boss_bulletl = new Image();
let boss_bullet = boss_bulletr;
let jumpcheck = false;
let cur_posX = 0;
let cur_posY = 0;
let harpoonr = new Image();
let harpoonl = new Image();

let fight_status = false;
let hp_sander = 100;
let hp_max = 100;
let hp_monster = 150;
let currentLoopIndex_monster = 0;
const CYCLE_LOOP_MONSTER = [0, 1, 2, 3, 3];
let monster_action = 0;
let monster_speed = 3;
let bunchun_phase = 1;
let monster_posx = [1556, 1150, 1596, 1500];
let monster_posy = [80, 402, 522, 426];
let monster_bulletx = -100;
let monster_bullety = 0;
let monster_bullet_posxy = [];
let monster_bullet_timer = 200;
let frameCount_monster = 0;
let monster_move = true;
let monster_attack = false;
let worm_check = false;
let axeon_check = false;
let bunchun_check = false;
let mcdo_check = false;
let dead_status = false;
let temp_x = 0;
let temp_y = 0;
let posatmx = 0;
let posatmy = 0;
let player_takedmg = false;
let monster_takedmg = false;
let bossbullet_damage = false;
let bullet_damage = false;
let bulletout = false;
let tracktime = 0;

let itemsound = new Audio("sound/Item sound.mp3");
let typesound = new Audio("sound/Type sound.mp3");
let stonestepsound = new Audio("sound/stonestep.mp3");
let sandstepsound = new Audio("sound/sandstep.mp3");
let sandstep2sound = new Audio("sound/sandstep2.mp3");
let sandstep3sound = new Audio("sound/sandstep3.mp3");
let steelstepsound = new Audio("sound/steelstep.mp3");
let chickenwalksound = new Audio("sound/chickenwalk.mp3");
let sandsound = new Audio("sound/Sands of Mystery.mp3");
let gunsound = new Audio("sound/lazer.mp3");
let chargersound = new Audio("sound/charger.mp3");
let mon4hitsound = new Audio("sound/mon4hit.mp3");
let mon4diedsound = new Audio("sound/mon4died.mp3");
let sabersound = new Audio("sound/lightsaber.mp3");
let electric1sound = new Audio("sound/electric1.mp3");
let electric2sound = new Audio("sound/electric2.mp3");
let electric3sound = new Audio("sound/electric3.mp3");
let finalfightsound = new Audio("sound/finalfight.mp3");
let finalfight2sound = new Audio("sound/finalfight2.mp3");
let minibossendsound = new Audio("sound/minibossend.mp3");
let deadsound = new Audio("sound/dead.mp3");
let dead2sound = new Audio("sound/dead2.mp3");
let wormhitsound = new Audio("sound/wormhit.mp3");
let wormwalksound = new Audio("sound/wormwalk.mp3");
let hitsound = new Audio("sound/hit.mp3");
let hit2sound = new Audio("sound/hit2.mp3");
let spearsound = new Audio("sound/spear.mp3");
let rcannonsound = new Audio("sound/rcannon.mp3");
let cannonsound = new Audio("sound/cannon.mp3");
let cannonhitsound = new Audio("sound/cannonhit.mp3");
let warningsound = new Audio("sound/warning.mp3");
let metalhitsound = new Audio("sound/metalhit.mp3");
let finalbosswalksound = new Audio("sound/finalbosswalk.mp3");
let endingsound = new Audio("sound/ending.mp3");
let bemyremedy = new Audio("sound/Be My Remedy.mp3");

window.addEventListener("keydown", (event) => {
  keyPresses[event.code] = true;
});
window.addEventListener("keyup", (event) => {
  keyPresses[event.code] = false;
});
window.addEventListener("mousedown", (event) => {
  mouseclick = true;
});
window.addEventListener("mouseup", (event) => {
  mouseclick = false;
});

function loadImage() {
  sander.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/968708920317202472/sander_final.png";
  sander_weapon.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/972419194148769802/sander_weapon_final.png";
  sander_sword.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/967714982135480330/sander_sword.png";
  sander_damage.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/968359288064053259/sander_damage.png";
  sander_sword_damage.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/968359287715954708/sander_sword_damage.png";
  sander_weapon_damage.src = "image/sander_weapon_damage.png";
  sander.onload = () => {
    window.requestAnimationFrame(gameLoop);
  };
  sander_pf_st.src =
    "https://media.discordapp.net/attachments/933591523189215235/965153062740176916/sander_pf_st.png";

  sander_dia.src = "image/sander_dialogue.png";
  extra0_dia.src = "image/extra0_dialogue.png";
  extra1_dia.src = "image/extra1_dialogue.png";
  wichian_dia.src = "image/wichian_dia.png";
  axeon_dia.src = "image/axeon_dia.png";
  bunchun_dia.src = "image/bunchun_dia.png";
  mcdo_dia.src = "image/mcdo_dia.png";

  sword_inhand.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/972396351449096232/sword_inhand.png";
  gunL.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/972396333640085544/gun_inhand_l.png";

  box1.src = "image/box1.png";
  box2.src = "image/box2.png";
  extra0.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/977482859487068200/extra0.png";
  extra1.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/977455913755615252/extra1.png";
  extra2.src = "image/extra2.png";
  extra3.src = "image/extra3.png";
  extra4.src = "image/hadao-sneek.png";

  bullet_w.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/966710007934636062/bullet_w.png";
  bullet_a.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/966710008307916820/bullet_a.png";
  bullet_s.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/966710007670378496/bullet_s.png";
  bullet_d.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/966710007246749766/bullet_d.png";

  bg1.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/966712027332632596/bg1.png";
  bg1_1.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/966712027877875842/bg1_1.png";
  bg2.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/968912790016389150/bg2.jpg";
  bg2_1.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/968912800300798022/bg2_1.jpg";
  bg3.src = "image/bg3.jpg";
  bg3_1.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/966709748701495366/bg3_1.jpg";
  bg4.src = "image/bg4.jpg";
  bg4_1.src = "image/bg4_1.jpg";
  bg5.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/966711169886863410/bg5.jpg";
  bg5_1.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/966711170138525767/bg5_1.jpg";
  bg6.src = "image/bg6.jpg";
  bg6_1.src = "image/bg6_1.jpg";
  bg6_obj1.src = "image/bg6_obj1.png";
  bg6_dark.src = "image/bg6_dark.png";

  bg1_obj1.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/966712026724438026/bg1_obj1.png";
  bg2_obj1.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/968912908018917416/bg2_obj1.png";
  bg3_obj1.src = "image/bg3_obj1.png";
  bg4_obj1.src = "image/bg4_obj1.png";
  bg5_obj1.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/966711170381783080/bg5_obj1.png";

  frame.src =
    "https://media.discordapp.net/attachments/933591523189215235/965956913730838579/frame.png";
  key.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/966987241731813396/key.png";
  usekey.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/967032887402700860/usekey.png";
  sword.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/967632061118697482/sword.png";
  swordf.src =
    "https://cdn.discordapp.com/attachments/812749326543487058/967095296968523796/swordf.png";
  gun.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/972185631478407258/gunbg.png";
  wormf.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/972357220593455114/wormf.png";
  bunchunf.src = "image/bunchunf.png";
  wichianf.src = "image/wichianf.png";
  hadaof.src = "image/hadaof.png";

  worm.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/968199488185446420/worm.png";
  worm_damage.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/968361910737207306/worm_damage.png";
  axeon.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/969666663681253457/axeon.png";
  axeon_damage.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/970555133308051507/axeon_damage.png";
  axeonf.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/970556505394913290/axeonf.png";
  bunchun.src = "image/miniboss.png";
  bunchun_damage.src = "image/miniboss_damage.png";
  bunchun_action4.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/971421292895043634/miniboss_action4.png";
  bunchun_zeri.src =
    "https://cdn.discordapp.com/attachments/933591523189215235/977636140200898610/miniboss_zeri.png";
  mcdo.src = "image/mcdo.png";
  mcdo_damage.src = "image/mcdo_damage.png";
  boss_bulletr.src = "image/boss_bulletr.png";
  boss_bulletl.src = "image/boss_bulletl.png";
  harpoonl.src = "image/harpoonl.png";
  harpoonr.src = "image/harpoonr.png";
}

function leftsword() {
  if (lefthand_current == "sword") {
    lefthand = undefined;
    lefthand_current = undefined;
  } else if (sword_status) {
    lefthand = "sword";
    lefthand_current = "sword";
    if (righthand == "sword") {
      righthand = undefined;
      righthand_current = undefined;
    }
  }
}

function rightsword() {
  if (righthand_current == "sword") {
    righthand = undefined;
    righthand_current = undefined;
  } else if (sword_status) {
    righthand = "sword";
    righthand_current = "sword";
    if (lefthand == "sword") {
      lefthand = undefined;
      lefthand_current = undefined;
    }
  }
}

function leftgun() {
  if (lefthand_current == "gun") {
    lefthand = undefined;
    lefthand_current = undefined;
  } else if (gun_status) {
    lefthand = "gun";
    lefthand_current = "gun";
    if (righthand == "gun") {
      righthand = undefined;
      righthand_current = undefined;
    }
  }
}

function rightgun() {
  if (righthand_current == "gun") {
    righthand = undefined;
    righthand_current = undefined;
  } else if (gun_status) {
    righthand = "gun";
    righthand_current = "gun";
    if (lefthand == "gun") {
      lefthand = undefined;
      lefthand_current = undefined;
    }
  }
}

function retry() {
  hp_sander = hp_max;
  hp_monster = 150;
  fight_status = false;
  fade_status = true;
  currentDirection = FACING_RIGHT;
  if (checkpoint == 2) {
    monster_posx[0] = 1556;
    monster_posy[0] = 80;
    positionX = 12;
    positionY = 450;
  }
  if (checkpoint == 4) {
    monster_posx[1] = 1150;
    monster_posy[1] = 402;
    positionX = 12;
    positionY = 402;
  }
  if (checkpoint == 5) {
    currentLoopIndex_monster = 0;
    bunchun_phase = 1;
    monster_action = 4;
    monster_bulletx = -100;
    monster_posx[2] = 1596;
    monster_posy[2] = 522;
    positionX = 12;
    positionY = 522;
  }
  if (checkpoint == 6) {
    fight_status = true;
    positionX = 12;
    positionY = 522;
    monster_posx[3] = 1500;
    monster_posy[3] = 426;
  }
}

function up() {
  document.addEventListener("click", function (event) {
    if (!dialogue_status) {
      if (event.target.matches(".weapon-l")) {
        document.getElementsByClassName("dropup-l")[0].style.display = "block";
      } else {
        document.getElementsByClassName("dropup-l")[0].style.display = "none";
      }
      if (event.target.matches(".weapon-r")) {
        document.getElementsByClassName("dropup-r")[0].style.display = "block";
      } else {
        document.getElementsByClassName("dropup-r")[0].style.display = "none";
      }
    }
  });
  if (!gun_status) {
    document.getElementsByClassName("imggun")[0].style.opacity = "0.3";
    document.getElementsByClassName("imggun")[1].style.opacity = "0.3";
    document.getElementsByClassName("nameweapon")[1].style.opacity = "0.3";
    document.getElementsByClassName("nameweapon")[3].style.opacity = "0.3";
  }
  if (gun_status) {
    document.getElementsByClassName("imggun")[0].style.opacity = "1";
    document.getElementsByClassName("imggun")[1].style.opacity = "1";
    document.getElementsByClassName("nameweapon")[1].style.opacity = "1";
    document.getElementsByClassName("nameweapon")[3].style.opacity = "1";
  }
  if (!sword_status) {
    document.getElementsByClassName("imgsword")[0].style.opacity = "0.3";
    document.getElementsByClassName("imgsword")[1].style.opacity = "0.3";
    document.getElementsByClassName("nameweapon")[0].style.opacity = "0.3";
    document.getElementsByClassName("nameweapon")[2].style.opacity = "0.3";
  }
  if (sword_status) {
    document.getElementsByClassName("imgsword")[0].style.opacity = "1";
    document.getElementsByClassName("imgsword")[1].style.opacity = "1";
    document.getElementsByClassName("nameweapon")[0].style.opacity = "1";
    document.getElementsByClassName("nameweapon")[2].style.opacity = "1";
  }
}

function drawBg() {
  ctx.drawImage(bg, 0, 0, myCanvas.width, myCanvas.height);
}

function drawFrame(
  image,
  frameX,
  frameY,
  canvasX,
  canvasY,
  WIDTH,
  HEIGHT,
  SCALED_WIDTH,
  SCALED_HEIGHT
) {
  ctx.drawImage(
    image,
    frameX * WIDTH,
    frameY * HEIGHT,
    WIDTH,
    HEIGHT,
    canvasX,
    canvasY,
    SCALED_WIDTH,
    SCALED_HEIGHT
  );
}

function drawObj() {
  ctx.drawImage(bg_obj, 0, 0, myCanvas.width, myCanvas.height);
}

function drawExtra() {
  frameCount_extra++;
  if (frameCount_extra >= FRAME_LIMIT) {
    frameCount_extra = 0;
    currentLoopIndex_extra++;
    if (currentLoopIndex_extra >= CYCLE_LOOP.length) {
      currentLoopIndex_extra = 0;
    }
  }
}

loadImage();

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let hasMoved = false;
  playershoot = false;

  if (checkpoint == 1) {
    if (comic) {
      sandsound.play();
    }
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

    if (
      positionX >= 1770 &&
      positionY > 426 &&
      currentDirection == FACING_RIGHT &&
      currentEvent >= 7 &&
      extrax[1] >= 2000
    ) {
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
    if (
      positionX <= -18 &&
      positionY > 144 &&
      currentDirection == FACING_LEFT &&
      !fight_status
    ) {
      bg = bg1;
      currentBg = bg1;
      currentBg_ = bg1_1;
      bg_obj = bg1_obj1;
      checkpoint = 1;
      positionX = 1758;
      positionY = 612;
      fade_status = true;
    }
    if (
      positionX >= 1770 &&
      positionY > 426 &&
      currentDirection == FACING_RIGHT &&
      !fight_status &&
      worm_check
    ) {
      positionX = 12;
      positionY = 606;
      bg = bg3;
      currentBg = bg3;
      currentBg_ = bg3_1;
      bg_obj = bg3_obj1;
      checkpoint = 3;
      currentLoopIndex_extra = 0;
      fade_status = true;
    }
  }

  if (checkpoint == 3) {
    walkCollison(6, 480, 144, 150);
    walkCollison(6, 558, 144, 78);
    walkCollison(6, 450, 234, 60);
    walkCollison(6, 252, 234, 228);
    walkCollison(6, 180, 234, 72);
    walkCollison(240, 180, 240, 72);
    walkCollison(360, 180, 120, 72);
    walkCollison(480, 180, 198 - 24, 72);
    walkCollison(516, 252, 162 - 24, 72);
    walkCollison(864, 288, 156, 114);
    walkCollison(1020, 288, 894, 42);
    walkCollison(1020, 330, 894, 114);
    walkCollison(1134, 408, 780, 72);
    walkCollison(1338, 444, 576, 72);
    walkCollison(1428, 918, 486, 72);
    walkCollison(1332, 990, 582, 84);

    if (
      positionX <= -18 &&
      positionY > 596 &&
      currentDirection == FACING_LEFT
    ) {
      bg = bg2;
      currentBg = bg2;
      currentBg_ = bg2_1;
      bg_obj = bg2_obj1;
      checkpoint = 2;
      positionX = 1758;
      positionY = 612;
      fade_status = true;
    }
    if (
      positionX >= 1770 &&
      positionY > 450 &&
      currentDirection == FACING_RIGHT
    ) {
      positionX = 12;
      positionY = 522;
      hp_monster = 150;
      bg = bg4;
      currentBg = bg4;
      currentBg_ = bg4_1;
      bg_obj = bg4_obj1;
      checkpoint = 4;
      currentEvent = 10;
      fade_status = true;
    }
  }

  if (checkpoint == 4) {
    objstatus = true;
    walkCollison(30, 105, 390, 120);
    walkCollison(435, 105, 945, 120);
    walkCollison(1404, 150, 450, 81);
    walkCollison(1404, 228, 450, 120);

    walkCollison(1383, 864, 450, 90);
    walkCollison(1383, 930, 450, 90);
    walkCollison(1383, 1002, 450, 90);

    if (
      positionX <= -18 &&
      positionY > 215 &&
      currentDirection == FACING_LEFT &&
      !fight_status
    ) {
      bg = bg3_1;
      currentBg = bg3;
      currentBg_ = bg3_1;
      bg_obj = bg3_obj1;
      checkpoint = 3;
      positionX = 1758;
      positionY = 612;
      fade_status = true;
    }
    if (
      positionX >= 1615 &&
      positionY >= 220 &&
      positionY <= 740 &&
      currentDirection == FACING_RIGHT &&
      !fight_status
    ) {
      positionX = 12;
      positionY = 522;
      hp_monster = 150;
      bg = bg5;
      currentBg = bg5;
      currentBg_ = bg5_1;
      bg_obj = bg5_obj1;
      checkpoint = 5;
      fade_status = true;
      currentEvent = 12;
    }
  }

  if (checkpoint == 5) {
    sandsound.pause();
    walkCollison(30, 255, 180, 120);
    walkCollison(1707, 255, 180, 120);
    walkCollison(240, 165, 1440, 90);
    walkCollison(12, 1002, 180, 60);
    walkCollison(225, 1002, 180, 60);
    walkCollison(438, 1002, 180, 60);
    walkCollison(651, 1002, 180, 60);
    walkCollison(864, 1002, 180, 60);
    walkCollison(1077, 1002, 180, 60);
    walkCollison(1290, 1002, 180, 60);
    walkCollison(1503, 1002, 180, 60);
    walkCollison(1716, 1002, 180, 60);
    if (hp_monster > 0) {
      finalfight2sound.play();
    }
    if (hp_monster <= 0 || hp_sander <= 0) {
      finalfight2sound.pause();
    }
  }

  if (checkpoint == 6) {
    walkCollison(21, 150, 1881, 100);
    walkCollison(21, 282, 600, 100);
    walkCollison(594, 219, 201, 100);
    walkCollison(1290, 249, 615, 100);
    walkCollison(1290, 285, 615, 100);
    if (hp_monster > 0) {
      finalfightsound.play();
    }
    if (hp_monster <= 0 || hp_sander <= 0) {
      finalfightsound.pause();
    }
  }

  // document.getElementById("homepage").style.display = "none"
  // document.getElementById("comic-container").style.display = "none"

  if (
    (keyPresses.KeyW || keyPresses.KeyS) &&
    (keyPresses.KeyA || keyPresses.KeyD)
  ) {
    movement_speed /= Math.sqrt(2);
  }
  if (
    keyPresses.KeyW &&
    !dialogue_status &&
    !playerhit &&
    hp_sander > 0 &&
    document.getElementById("homepage").style.display == "none" &&
    document.getElementById("comic-container").style.display == "none" &&
    currentEvent < 18
  ) {
    moveCharacter(0, -movement_speed, FACING_UP);
    hasMoved = true;
  }
  if (
    keyPresses.KeyS &&
    !dialogue_status &&
    !playerhit &&
    hp_sander > 0 &&
    document.getElementById("homepage").style.display == "none" &&
    document.getElementById("comic-container").style.display == "none" &&
    currentEvent < 18
  ) {
    moveCharacter(0, movement_speed, FACING_DOWN);
    hasMoved = true;
  }
  if (
    keyPresses.KeyA &&
    !dialogue_status &&
    !playerhit &&
    hp_sander > 0 &&
    document.getElementById("homepage").style.display == "none" &&
    document.getElementById("comic-container").style.display == "none" &&
    currentEvent < 18
  ) {
    moveCharacter(-movement_speed, 0, FACING_LEFT);
    hasMoved = true;
  }
  if (
    keyPresses.KeyD &&
    !dialogue_status &&
    !playerhit &&
    hp_sander > 0 &&
    document.getElementById("homepage").style.display == "none" &&
    document.getElementById("comic-container").style.display == "none" &&
    currentEvent < 18
  ) {
    moveCharacter(movement_speed, 0, FACING_RIGHT);
    hasMoved = true;
  }
  if (
    hp_sander > 0 &&
    (((keyPresses.Space || mouseclick) &&
      ((lefthand == "sword" && righthand == undefined) ||
        (righthand == "sword" && lefthand == undefined))) ||
      (mouseclick && righthand == "sword" && lefthand == "gun") ||
      (keyPresses.Space && righthand == "gun" && lefthand == "sword")) &&
    !dialogue_status &&
    document.getElementById("homepage").style.display == "none" &&
    document.getElementById("comic-container").style.display == "none" &&
    currentEvent < 18
  ) {
    playerhit = true;
    sabersound.play();
  }
  if (
    hp_sander > 0 &&
    (((keyPresses.Space || mouseclick) &&
      ((lefthand == "gun" && righthand == undefined) ||
        (righthand == "gun" && lefthand == undefined))) ||
      (mouseclick && righthand == "gun" && lefthand == "sword") ||
      (keyPresses.Space && righthand == "sword" && lefthand == "gun")) &&
    !dialogue_status &&
    document.getElementById("homepage").style.display == "none" &&
    document.getElementById("comic-container").style.display == "none" &&
    currentEvent < 18
  ) {
    playershoot = true;
  }
  if (playerhit && hp_sander > 0) {
    if (hasMoved) {
      currentLoopIndex = 0;
    }
    hasMoved = false;
    sander_current = sander_sword;
  } else if (playershoot && hp_sander > 0) {
    if (hasMoved) {
      currentLoopIndex = 0;
    }
    hasMoved = false;
    sander_current = sander_weapon;
  } else {
    sander_current = sander;
  }
  if (hasMoved == true) {
    if (checkpoint == 1 || checkpoint == 2 || checkpoint == 3) {
      sandstepsound.play();
    }
    if (checkpoint == 4 || checkpoint == 5 || checkpoint == 6) {
      stonestepsound.play();
    }
  }
  if (hasMoved == false) {
    if (checkpoint == 1 || checkpoint == 2 || checkpoint == 3) {
      sandstepsound.pause();
      stonestepsound.pause();
    }
    if (checkpoint == 4 || checkpoint == 5 || checkpoint == 6) {
      sandstepsound.pause();
      stonestepsound.pause();
    }
  }
  if (
    (keyPresses.Space || mouseclick) &&
    energy > 0 &&
    playershoot &&
    !dialogue_status &&
    gun_status &&
    document.getElementById("homepage").style.display == "none" &&
    document.getElementById("comic-container").style.display == "none"
  ) {
    if (energy != 0) {
      energy -= 1;
      gunsound.play();
    }
    if (bullet_timer <= 0) {
      bullet_posx = positionX + 78;
      bullet_posy = positionY + 78;
      if (currentDirection == FACING_LEFT) {
        bullet_posxy.push([
          bullet_posx - 156,
          bullet_posy - 78,
          currentDirection,
          0,
        ]);
      }
      if (currentDirection == FACING_RIGHT) {
        bullet_posxy.push([bullet_posx, bullet_posy - 78, currentDirection, 0]);
      }
      if (currentDirection == FACING_UP) {
        bullet_posxy.push([
          bullet_posx - 78,
          bullet_posy - 162,
          currentDirection,
          0,
        ]);
      }
      if (currentDirection == FACING_DOWN) {
        bullet_posxy.push([bullet_posx - 78, bullet_posy, currentDirection, 0]);
      }
      bullet_timer = delay;
    }
    bullet_timer -= 1;
  } else {
    gunsound.pause();
    if (energy < 145) {
      energy += 0.5;
    }
  }
  if (!fight_status && hp_sander + 0.5 <= 100 && hp_sander > 0) {
    hp_sander += 0.5;
  }

  if (!run) {
    document.getElementById("homepage").style.display = "flex";
    console.log(checkpoint);
    if (keyPresses.Space || mouseclick) {
      run = true;
      console.log(checkpoint);
    }
  }
  if (run && currentEvent == -1 && !keyPresses.Space && !mouseclick) {
    document.getElementById("comic-container").style.display = "flex";
    comic = true;
  }
  if (comic && (keyPresses.Space || mouseclick) && currentEvent == -1) {
    currentEvent = 0;
  }
  if (comic && (keyPresses.Space || mouseclick) && currentEvent == 8) {
    currentEvent = 9;
  }
  if (comic && (keyPresses.Space || mouseclick) && currentEvent == 10) {
    currentEvent = 11;
  }
  if (comic && (keyPresses.Space || mouseclick) && currentEvent == 13) {
    currentEvent = 14;
    positionX = 12;
    positionY = 522;
    hp_monster = 150;
    bg = bg6;
    currentBg = bg6;
    currentBg_ = bg6_1;
    bg_obj = bg6_obj1;
    checkpoint = 6;
    currentDirection = FACING_RIGHT;
  }
  if (comic && (keyPresses.Space || mouseclick) && currentEvent == 15) {
    currentEvent = 16;
  }
  if (comic && (keyPresses.Space || mouseclick) && currentEvent == 17) {
    currentEvent = 18;
  }
  if (
    !keyPresses.Space &&
    !mouseclick &&
    (currentEvent == 0 ||
      currentEvent == 9 ||
      currentEvent == 11 ||
      currentEvent == 14 ||
      currentEvent == 16 ||
      currentEvent == 18) &&
    comic
  ) {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("comic-container").style.animationName = "comic";
    document.getElementById("comic-container").style.animationDuration = "2.5s";
    setTimeout(() => {
      document.getElementById("comic-container").style.display = "none";
      comic = false;
      if (checkpoint == 6 && currentEvent == 16) {
        fight_status = true;
      }
      if (currentEvent == 18) {
        document.getElementById("endcredit").style.display = "block";
        document.getElementById("contvideo").style.display = "block";
        document.getElementById("endcreditinf").style.display = "flex";
        document.getElementById("video").play();
        endingsound.pause();
        bemyremedy.play();
      }
    }, 2500);
    if (currentEvent == 0) {
      dialogue_status = true;
    }
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

  // console.log(currentEvent, dialogue_status)
  if (hasMoved || playerhit || dead_status) {
    console.log("positionX: ", positionX);
    console.log("positionY: ", positionY);
    frameCount++;
    if (frameCount >= FRAME_LIMIT) {
      frameCount = 0;
      currentLoopIndex++;
      if (currentLoopIndex >= CYCLE_LOOP.length) {
        currentLoopIndex = 0;
        if (playerhit) {
          playerhit = false;
        }
        if (dead_status) {
          dead_status = false;
        }
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
    if (hp_sander <= 0) {
      currentLoopIndex = 3;
      wormwalksound.pause();
      chickenwalksound.pause();
      steelstepsound.pause();
      finalbosswalksound.pause();
    } else {
      currentLoopIndex = 0;
    }
  }

  for (var i = 0; i < objposX.length; i++) {
    if (
      !objposXY.includes(
        ((objposX[i] - positionX - SCALED_WIDTH / 2) ** 2 +
          (objposY[i] - positionY - SCALED_WIDTH / 2) ** 2) **
          (1 / 2)
      )
    ) {
      objposXY.push([
        Math.floor(
          ((objposX[i] - positionX - SCALED_WIDTH / 2) ** 2 +
            (objposY[i] - positionY - SCALED_WIDTH / 2) ** 2) **
            (1 / 2)
        ),
        i,
      ]);
    }
  }

  objposXY.sort(function (a, b) {
    return a[0] - b[0];
  });

  if (objposY[objposXY[0][1]] - positionY - SCALED_WIDTH >= 0) {
    objstatus = true;
  }
  if (objstatus && currentEvent < 18) {
    bg = currentBg_;
    drawBg();
    drawBullet();
    if (
      checkpoint == 1 &&
      currentEvent < 2 &&
      extrax[0] != -162 &&
      positionY + 162 >= extray[0] + 186
    ) {
      ctx.drawImage(extra0, 0, 0, 512, 512, extrax[0], extray[0], 186, 186);
    }
    if (
      checkpoint == 1 &&
      currentEvent >= 2 &&
      extrax[0] != -162 &&
      positionY + 162 >= extray[0] + 186 &&
      !dialogue_status
    ) {
      drawFrame(
        extra0,
        CYCLE_LOOP[currentLoopIndex_extra],
        1,
        extrax[0],
        extray[0],
        512,
        512,
        186,
        186
      );
    }
    if (
      currentEvent >= 2 &&
      extrax[0] != -162 &&
      positionY + 162 >= extray[0] + 186 &&
      dialogue_status
    ) {
      ctx.drawImage(extra0, 512, 0, 512, 512, extrax[0], extray[0], 186, 186);
    }
    if (
      currentEvent >= 4 &&
      currentEvent < 7 &&
      positionY + 162 >= extray[1] + 174
    ) {
      drawFrame(
        extra1,
        CYCLE_LOOP[currentLoopIndex_extra],
        3,
        extrax[1],
        extray[1],
        512,
        512,
        186,
        186
      );
    }
    if (
      currentEvent == 5 &&
      !dialogue_status &&
      !inventory.includes("sword") &&
      positionY + 162 >= 162 + 120
    ) {
      ctx.drawImage(sword, 1140, 162, 96, 120);
    }
    if (currentEvent == 7 && positionY + 162 >= extray[1] + 174) {
      drawFrame(
        extra1,
        CYCLE_LOOP[currentLoopIndex_extra],
        2,
        extrax[1],
        extray[1],
        512,
        512,
        186,
        186
      );
    }
    if (currentEvent == 8 && positionY + 162 >= extray[1] + 174) {
      drawFrame(
        extra1,
        CYCLE_LOOP[currentLoopIndex_extra],
        1,
        extrax[1],
        extray[1],
        512,
        512,
        186,
        186
      );
    }
    if (
      fight_status &&
      checkpoint == 2 &&
      positionY + 162 >= monster_posy[0] + 226.25 * (3 / 4)
    ) {
      drawFrame(
        worm,
        CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
        monster_action,
        monster_posx[0],
        monster_posy[0],
        512,
        452.5,
        324,
        226.25
      );
    }
    if (
      checkpoint == 2 &&
      worm_check &&
      !inventory.includes("gun") &&
      !fight_status &&
      positionY + 162 >= monster_posy[0] + 226.25 * (3 / 4)
    ) {
      ctx.drawImage(
        worm,
        3 * 512,
        4 * 452.5,
        512,
        452.5,
        monster_posx[0],
        monster_posy[0],
        324,
        226.25
      );
    }
    if (checkpoint == 3 && positionY + 162 < canvas.height - 270) {
      ctx.drawImage(extra3, 0, canvas.height - 270, 1920, 270);
    }
    if (checkpoint == 3 && positionY + 162 >= 179 + 162 + 30) {
      ctx.drawImage(extra4, 804, 179);
    }
    if (
      checkpoint == 4 &&
      !axeon_check &&
      !fight_status &&
      positionY + 162 >= monster_posy[1] + 300
    ) {
      ctx.drawImage(
        axeon,
        0 * 512,
        3 * 512,
        512,
        512,
        monster_posx[1],
        monster_posy[1],
        324,
        324
      );
    }
    if (
      checkpoint == 4 &&
      axeon_check &&
      !fight_status &&
      positionY + 162 >= monster_posy[1] + 300
    ) {
      ctx.drawImage(
        axeon,
        3 * 512,
        7 * 512,
        512,
        512,
        monster_posx[1],
        monster_posy[1],
        324,
        324
      );
    }
    if (
      checkpoint == 4 &&
      fight_status &&
      positionY + 162 >= monster_posy[1] + 300
    ) {
      drawFrame(
        axeon,
        CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
        monster_action,
        monster_posx[1],
        monster_posy[1],
        512,
        512,
        324,
        324
      );
    }
    if (sander_current == sander_weapon) {
      if (currentDirection == FACING_RIGHT) {
        ctx.drawImage(gun, positionX + 115, positionY + 42, 90, 90);
      }
      if (currentDirection == FACING_LEFT) {
        ctx.drawImage(gunL, positionX - 40, positionY + 42, 90, 90);
      }
    }
    if (checkpoint == 5 && !fight_status && !bunchun_check) {
      ctx.drawImage(
        bunchun,
        0,
        2 * 512,
        512,
        512,
        monster_posx[2],
        monster_posy[2],
        192,
        192
      );
      monster_action = 4;
    }
    if (
      checkpoint == 5 &&
      !fight_status &&
      bunchun_check &&
      positionY + 162 >= monster_posy[2] + 174 + 30
    ) {
      ctx.drawImage(
        bunchun,
        3 * 512,
        7 * 512,
        512,
        512,
        monster_posx[2],
        monster_posy[2],
        192,
        192
      );
    }
    if (
      checkpoint == 5 &&
      fight_status &&
      positionY + 162 >= monster_posy[2] + 174 + 30
    ) {
      if (monster_action == 5 && currentLoopIndex_monster >= 3) {
        ctx.drawImage(
          bunchun_zeri,
          monster_posx[2] - 100,
          monster_posy[2],
          395,
          192
        );
        electric1sound.play();
      }
      drawFrame(
        bunchun,
        CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
        monster_action,
        monster_posx[2],
        monster_posy[2],
        512,
        512,
        192,
        192
      );
    }
    drawFrame(
      sander_current,
      CYCLE_LOOP[currentLoopIndex],
      currentDirection,
      positionX,
      positionY,
      512,
      512,
      162,
      162
    );
    if (
      checkpoint == 1 &&
      currentEvent >= 2 &&
      extrax[0] != -162 &&
      positionY + 162 < extray[0] + 186 &&
      !dialogue_status
    ) {
      drawFrame(
        extra0,
        CYCLE_LOOP[currentLoopIndex_extra],
        1,
        extrax[0],
        extray[0],
        512,
        512,
        186,
        186
      );
    }
    if (
      checkpoint == 1 &&
      currentEvent >= 2 &&
      extrax[0] != -162 &&
      positionY + 162 < extray[0] + 186 &&
      dialogue_status
    ) {
      ctx.drawImage(extra0, 512, 0, 512, 512, extrax[0], extray[0], 186, 186);
    }
    if (checkpoint == 3 && positionY + 162 < 179 + 162 + 30) {
      ctx.drawImage(extra4, 804, 179);
    }
    if (
      currentEvent == 5 &&
      !dialogue_status &&
      !inventory.includes("sword") &&
      positionY + 162 < 162 + 120
    ) {
      ctx.drawImage(sword, 1140, 162, 96, 120);
    }
    if (
      checkpoint == 1 &&
      currentEvent < 2 &&
      extrax[0] != -162 &&
      positionY + 162 < extray[0] + 186
    ) {
      ctx.drawImage(extra0, 0, 0, 512, 512, extrax[0], extray[0], 186, 186);
    }
    if (currentEvent < 4) {
      ctx.drawImage(extra1, 0, 0, 512, 512, extrax[1], extray[1], 186, 186);
    }
    if (
      currentEvent >= 4 &&
      currentEvent < 7 &&
      positionY + 162 < extray[1] + 174
    ) {
      drawFrame(
        extra1,
        CYCLE_LOOP[currentLoopIndex_extra],
        3,
        extrax[1],
        extray[1],
        512,
        512,
        186,
        186
      );
    }
    if (currentEvent == 7 && positionY + 162 < extray[1] + 174) {
      drawFrame(
        extra1,
        CYCLE_LOOP[currentLoopIndex_extra],
        2,
        extrax[1],
        extray[1],
        512,
        512,
        186,
        186
      );
    }
    if (currentEvent == 8 && positionY + 162 < extray[1] + 174) {
      drawFrame(
        extra1,
        CYCLE_LOOP[currentLoopIndex_extra],
        1,
        extrax[1],
        extray[1],
        512,
        512,
        186,
        186
      );
    }
    if (
      fight_status &&
      checkpoint == 2 &&
      positionY + 162 < monster_posy[0] + 226.25 * (3 / 4)
    ) {
      drawFrame(
        worm,
        CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
        monster_action,
        monster_posx[0],
        monster_posy[0],
        512,
        452.5,
        324,
        226.25
      );
    }
    if (
      checkpoint == 2 &&
      worm_check &&
      !inventory.includes("gun") &&
      !fight_status &&
      positionY + 162 < monster_posy[0] + 226.25 * (3 / 4)
    ) {
      ctx.drawImage(
        worm,
        3 * 512,
        4 * 452.5,
        512,
        452.5,
        monster_posx[0],
        monster_posy[0],
        324,
        226.25
      );
    }
    if (checkpoint == 3 && positionY + 162 >= canvas.height - 270) {
      ctx.drawImage(extra3, 0, canvas.height - 270, 1920, 270);
    }
    if (
      checkpoint == 4 &&
      !axeon_check &&
      !fight_status &&
      positionY + 162 < monster_posy[1] + 300
    ) {
      ctx.drawImage(
        axeon,
        0 * 512,
        3 * 512,
        512,
        512,
        monster_posx[1],
        monster_posy[1],
        324,
        324
      );
    }
    if (
      checkpoint == 4 &&
      axeon_check &&
      !fight_status &&
      positionY + 162 < monster_posy[1] + 300
    ) {
      ctx.drawImage(
        axeon,
        3 * 512,
        7 * 512,
        512,
        512,
        monster_posx[1],
        monster_posy[1],
        324,
        324
      );
    }
    if (
      checkpoint == 4 &&
      fight_status &&
      positionY + 162 < monster_posy[1] + 300
    ) {
      drawFrame(
        axeon,
        CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
        monster_action,
        monster_posx[1],
        monster_posy[1],
        512,
        512,
        324,
        324
      );
    }
    drawObj();
    if (checkpoint == 3) {
      if (currentEvent == 10 || currentEvent == 11.2) {
        drawFrame(
          box1,
          CYCLE_LOOP[currentLoopIndex_extra],
          0,
          262,
          380,
          68,
          68,
          68,
          68
        );
      }
      if (currentEvent == 10 || currentEvent == 11.1) {
        drawFrame(
          box2,
          CYCLE_LOOP[currentLoopIndex_extra],
          0,
          740,
          160,
          68,
          68,
          68,
          68
        );
      }
      drawExtra();
      ctx.drawImage(extra2, 152, 408, 113, 174);
    }
    if (checkpoint == 3 && positionY + 162 < 179 + 162 + 30) {
      ctx.drawImage(extra4, 804, 179);
    }
    if (
      checkpoint == 5 &&
      !fight_status &&
      bunchun_check &&
      positionY + 162 < monster_posy[2] + 174 + 30
    ) {
      ctx.drawImage(
        bunchun,
        3 * 512,
        7 * 512,
        512,
        512,
        monster_posx[2],
        monster_posy[2],
        192,
        192
      );
    }
    if (
      checkpoint == 5 &&
      fight_status &&
      positionY + 162 < monster_posy[2] + 174 + 30
    ) {
      if (monster_action == 5 && currentLoopIndex_monster >= 3) {
        ctx.drawImage(
          bunchun_zeri,
          monster_posx[2] - 100,
          monster_posy[2],
          395,
          192
        );
        electric1sound.play();
      }
      drawFrame(
        bunchun,
        CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
        monster_action,
        monster_posx[2],
        monster_posy[2],
        512,
        512,
        192,
        192
      );
    }
  } else if (currentEvent < 4) {
    bg = currentBg_;
    drawBg();
    ctx.drawImage(extra1, 0, 0, 512, 512, extrax[1], extray[1], 186, 186);
    if (
      checkpoint == 1 &&
      currentEvent < 2 &&
      extrax[0] != -162 &&
      positionY + 162 >= extray[0] + 186
    ) {
      ctx.drawImage(extra0, 0, 0, 512, 512, extrax[0], extray[0], 186, 186);
    }
    if (
      checkpoint == 1 &&
      currentEvent >= 2 &&
      extrax[0] != -162 &&
      positionY + 162 >= extray[0] + 186 &&
      !dialogue_status
    ) {
      drawFrame(
        extra0,
        CYCLE_LOOP[currentLoopIndex_extra],
        1,
        extrax[0],
        extray[0],
        512,
        512,
        186,
        186
      );
    }
    if (
      currentEvent >= 2 &&
      extrax[0] != -162 &&
      positionY + 162 >= extray[0] + 186 &&
      dialogue_status
    ) {
      ctx.drawImage(extra0, 512, 0, 512, 512, extrax[0], extray[0], 186, 186);
    }
    drawObj();
    if (sander_current == sander_weapon) {
      if (currentDirection == FACING_RIGHT) {
        ctx.drawImage(gun, positionX + 115, positionY + 42, 90, 90);
      }
      if (currentDirection == FACING_LEFT) {
        ctx.drawImage(gunL, positionX - 40, positionY + 42, 90, 90);
      }
    }
    drawFrame(
      sander_current,
      CYCLE_LOOP[currentLoopIndex],
      currentDirection,
      positionX,
      positionY,
      512,
      512,
      162,
      162
    );
    if (
      checkpoint == 1 &&
      currentEvent < 2 &&
      extrax[0] != -162 &&
      positionY + 162 < extray[0] + 186
    ) {
      ctx.drawImage(extra0, 0, 0, 512, 512, extrax[0], extray[0], 186, 186);
    }
    if (
      checkpoint == 1 &&
      currentEvent >= 2 &&
      extrax[0] != -162 &&
      positionY + 162 < extray[0] + 186 &&
      !dialogue_status
    ) {
      drawFrame(
        extra0,
        CYCLE_LOOP[currentLoopIndex_extra],
        1,
        extrax[0],
        extray[0],
        512,
        512,
        186,
        186
      );
    }
    if (
      checkpoint == 1 &&
      currentEvent >= 2 &&
      extrax[0] != -162 &&
      positionY + 162 < extray[0] + 186 &&
      dialogue_status
    ) {
      ctx.drawImage(extra0, 512, 0, 512, 512, extrax[0], extray[0], 186, 186);
    }
    if (
      checkpoint == 5 &&
      !fight_status &&
      bunchun_check &&
      positionY + 162 < monster_posy[2] + 174 + 30
    ) {
      ctx.drawImage(
        bunchun,
        3 * 512,
        7 * 512,
        512,
        512,
        monster_posx[2],
        monster_posy[2],
        192,
        192
      );
    }
  } else {
    if (currentEvent < 18) {
      bg = currentBg;
      drawBg();
      drawBullet();
      if (
        currentEvent >= 4 &&
        currentEvent < 7 &&
        positionY + 162 >= extray[1] + 174
      ) {
        drawFrame(
          extra1,
          CYCLE_LOOP[currentLoopIndex_extra],
          3,
          extrax[1],
          extray[1],
          512,
          512,
          186,
          186
        );
      }
      if (
        currentEvent == 5 &&
        !dialogue_status &&
        !inventory.includes("sword") &&
        positionY + 162 >= 162 + 120
      ) {
        ctx.drawImage(sword, 1140, 162, 96, 120);
      }
      if (currentEvent == 7 && positionY + 162 >= extray[1] + 174) {
        drawFrame(
          extra1,
          CYCLE_LOOP[currentLoopIndex_extra],
          2,
          extrax[1],
          extray[1],
          512,
          512,
          186,
          186
        );
      }
      if (currentEvent == 8 && positionY + 162 >= extray[1] + 174) {
        drawFrame(
          extra1,
          CYCLE_LOOP[currentLoopIndex_extra],
          1,
          extrax[1],
          extray[1],
          512,
          512,
          186,
          186
        );
      }
      if (
        fight_status &&
        checkpoint == 2 &&
        positionY + 162 >= monster_posy[0] + 226.25 * (3 / 4)
      ) {
        drawFrame(
          worm,
          CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
          monster_action,
          monster_posx[0],
          monster_posy[0],
          512,
          452.5,
          324,
          226.25
        );
      }
      if (
        checkpoint == 2 &&
        worm_check &&
        !inventory.includes("gun") &&
        !fight_status &&
        positionY + 162 >= monster_posy[0] + 226.25 * (3 / 4)
      ) {
        ctx.drawImage(
          worm,
          3 * 512,
          4 * 452.5,
          512,
          452.5,
          monster_posx[0],
          monster_posy[0],
          324,
          226.25
        );
      }
      if (checkpoint == 3 && positionY + 162 >= 408 + 174) {
        ctx.drawImage(extra2, 152, 408, 113, 174);
      }
      if (checkpoint == 3 && positionY + 162 < canvas.height - 270) {
        ctx.drawImage(extra3, 0, canvas.height - 270, 1920, 270);
      }
      if (checkpoint == 3 && positionY + 162 >= 179 + 162 + 30) {
        ctx.drawImage(extra4, 804, 179);
      }
      if (checkpoint == 5 && !fight_status && !bunchun_check) {
        ctx.drawImage(
          bunchun,
          0,
          2 * 512,
          512,
          512,
          monster_posx[2],
          monster_posy[2],
          192,
          192
        );
        monster_action = 4;
      }
      if (
        checkpoint == 5 &&
        !fight_status &&
        bunchun_check &&
        positionY + 162 >= monster_posy[2] + 174 + 30
      ) {
        ctx.drawImage(
          bunchun,
          3 * 512,
          7 * 512,
          512,
          512,
          monster_posx[2],
          monster_posy[2],
          192,
          192
        );
      }
      if (
        checkpoint == 5 &&
        fight_status &&
        positionY + 162 >= monster_posy[2] + 174 + 30
      ) {
        if (monster_action == 5 && currentLoopIndex_monster >= 3) {
          ctx.drawImage(
            bunchun_zeri,
            monster_posx[2] - 100,
            monster_posy[2],
            395,
            192
          );
          electric1sound.play();
        }
        drawFrame(
          bunchun,
          CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
          monster_action,
          monster_posx[2],
          monster_posy[2],
          512,
          512,
          192,
          192
        );
      }
      if (
        checkpoint == 6 &&
        !fight_status &&
        !mcdo_check &&
        positionY + 162 >= monster_posy[3] + 360 - 30
      ) {
        ctx.drawImage(
          mcdo,
          0,
          2 * 512,
          512,
          512,
          monster_posx[3],
          monster_posy[3],
          360,
          360
        );
      }
      if (
        checkpoint == 6 &&
        fight_status &&
        positionY + 162 >= monster_posy[3] + 360 - 30
      ) {
        drawFrame(
          mcdo,
          CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
          monster_action,
          monster_posx[3],
          monster_posy[3],
          512,
          512,
          360,
          360
        );
      }
      if (sander_current == sander_weapon) {
        if (currentDirection == FACING_RIGHT) {
          ctx.drawImage(gun, positionX + 115, positionY + 42, 90, 90);
        }
        if (currentDirection == FACING_LEFT) {
          ctx.drawImage(gunL, positionX - 40, positionY + 42, 90, 90);
        }
      }
      drawFrame(
        sander_current,
        CYCLE_LOOP[currentLoopIndex],
        currentDirection,
        positionX,
        positionY,
        512,
        512,
        162,
        162
      );
      drawBulletMonster();
      if (
        currentEvent >= 4 &&
        currentEvent < 7 &&
        positionY + 162 < extray[1] + 174
      ) {
        drawFrame(
          extra1,
          CYCLE_LOOP[currentLoopIndex_extra],
          3,
          extrax[1],
          extray[1],
          512,
          512,
          186,
          186
        );
      }
      if (
        currentEvent == 5 &&
        !dialogue_status &&
        !inventory.includes("sword") &&
        positionY + 162 < 162 + 120
      ) {
        ctx.drawImage(sword, 1140, 162, 96, 120);
      }
      if (currentEvent == 7 && positionY + 162 < extray[1] + 174) {
        drawFrame(
          extra1,
          CYCLE_LOOP[currentLoopIndex_extra],
          2,
          extrax[1],
          extray[1],
          512,
          512,
          186,
          186
        );
      }
      if (currentEvent == 8 && positionY + 162 < extray[1] + 174) {
        drawFrame(
          extra1,
          CYCLE_LOOP[currentLoopIndex_extra],
          1,
          extrax[1],
          extray[1],
          512,
          512,
          186,
          186
        );
      }
      if (
        fight_status &&
        checkpoint == 2 &&
        positionY + 162 < monster_posy[0] + 226.25 * (3 / 4)
      ) {
        drawFrame(
          worm,
          CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
          monster_action,
          monster_posx[0],
          monster_posy[0],
          512,
          452.5,
          324,
          226.25
        );
      }
      if (
        checkpoint == 2 &&
        worm_check &&
        !inventory.includes("gun") &&
        !fight_status &&
        positionY + 162 < monster_posy[0] + 226.25 * (3 / 4)
      ) {
        ctx.drawImage(
          worm,
          3 * 512,
          4 * 452.5,
          512,
          452.5,
          monster_posx[0],
          monster_posy[0],
          324,
          226.25
        );
      }
      if (checkpoint == 3 && positionY + 162 < 408 + 174) {
        ctx.drawImage(extra2, 152, 408, 113, 174);
      }
      if (checkpoint == 3) {
        if (currentEvent == 10 || currentEvent == 11.2) {
          drawFrame(
            box1,
            CYCLE_LOOP[currentLoopIndex_extra],
            0,
            262,
            380,
            68,
            68,
            68,
            68
          );
        }
        if (currentEvent == 10 || currentEvent == 11.1) {
          drawFrame(
            box2,
            CYCLE_LOOP[currentLoopIndex_extra],
            0,
            740,
            160,
            68,
            68,
            68,
            68
          );
        }
        drawExtra();
      }
      if (checkpoint == 3 && positionY + 162 < 179 + 162 + 30) {
        ctx.drawImage(extra4, 804, 179);
      }
      if (checkpoint == 3 && positionY + 162 >= canvas.height - 270) {
        ctx.drawImage(extra3, 0, canvas.height - 270, 1920, 270);
      }
      if (
        checkpoint == 5 &&
        !fight_status &&
        bunchun_check &&
        positionY + 162 < monster_posy[2] + 174 + 30
      ) {
        ctx.drawImage(
          bunchun,
          3 * 512,
          7 * 512,
          512,
          512,
          monster_posx[2],
          monster_posy[2],
          192,
          192
        );
      }
      if (
        checkpoint == 5 &&
        fight_status &&
        positionY + 162 < monster_posy[2] + 174 + 30
      ) {
        if (monster_action == 5 && currentLoopIndex_monster >= 3) {
          ctx.drawImage(
            bunchun_zeri,
            monster_posx[2] - 100,
            monster_posy[2],
            395,
            192
          );
          electric1sound.play();
        }
        drawFrame(
          bunchun,
          CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
          monster_action,
          monster_posx[2],
          monster_posy[2],
          512,
          512,
          192,
          192
        );
      }
      if (
        checkpoint == 6 &&
        !fight_status &&
        !mcdo_check &&
        positionY + 162 < monster_posy[3] + 360 - 30
      ) {
        ctx.drawImage(
          mcdo,
          0,
          2 * 512,
          512,
          512,
          monster_posx[3],
          monster_posy[3],
          360,
          360
        );
      }
      if (
        checkpoint == 6 &&
        fight_status &&
        positionY + 162 < monster_posy[3] + 360 - 30
      ) {
        drawFrame(
          mcdo,
          CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
          monster_action,
          monster_posx[3],
          monster_posy[3],
          512,
          512,
          360,
          360
        );
      }
      if (checkpoint == 6 && !fight_status && mcdo_check) {
        ctx.drawImage(
          mcdo,
          3 * 512,
          8 * 512,
          512,
          512,
          monster_posx[3],
          monster_posy[3],
          360,
          360
        );
      }
      if (checkpoint == 6) {
        ctx.drawImage(bg6_dark, 0, 0, canvas.width, canvas.height);
      }
    }
  }

  if (fight_status) {
    drawBlood();
  }
  if (!dialogue_status && currentEvent < 18) {
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
    words = [
      "soldier:นั่นใครน่ะ?! มาทำอะไรแถวนี้!!",
      "soldier:เดินเข้ามาใกล้ๆ นี่สิ ฉันจะได้เห็นหน้าแกชัดๆ",
    ];
    currentEvent = 1;
  }
  if (
    positionX >= 970 &&
    positionY >= 276 &&
    positionY <= 510 &&
    currentEvent == 1
  ) {
    dialogue_status = true;
    words = [
      "soldier:น่ะ...นี่มัน ท่านแซนเดอร์!!",
      "soldier:ท่านครับ หะ...ให้อภัยผมด้วย ผมผิดไปแล้ว!",
    ];
    currentEvent = 2;
  }
  if (
    currentEvent >= 2 &&
    currentEvent <= 3 &&
    !dialogue_status &&
    extrax[0] != -162
  ) {
    extrax[0] -= 12;
    drawExtra();
  }
  if (
    (Math.abs(positionX - extrax[1]) >= 660 ||
      (positionX >= 1600 && positionY > 426)) &&
    extrax[0] <= -162 &&
    currentEvent == 2 &&
    !dialogue_status
  ) {
    dialogue_status = true;
    words = [
      "hadao:เดี๋ยวก่อน นายน่ะ จะไปไหน!",
      "hadao:คิดจะไปโดยไม่ช่วยฉันหรอ ใจดำจริงๆ",
      "hadao:เมื่อกี้ฉันเห็นไอ้ทหารนั่นมันโยนกุญแจไว้แถว<br>พงหญ้านั่น นายช่วยไปหามาหน่อยสิ",
    ];
    currentEvent = 3;
  }
  if (positionY <= 150 && positionX <= 72 && currentEvent == 3) {
    if (!inventory.includes("key")) {
      ctx.drawImage(key, positionX + 144, positionY + 42);
      if (keyPresses.KeyF && !inventory.includes("key")) {
        inventory.push("key");
        itemsound.play();
      }
    }
  }
  if (inventory.includes("key") && currentEvent == 3) {
    if (positionX >= 1260 && positionY >= 6 && positionY <= 228) {
      ctx.drawImage(usekey, positionX + 144, positionY + 42);
      if (keyPresses.KeyF) {
        currentEvent = 4;
      }
    }
  }
  if (currentEvent >= 4 && currentEvent <= 5 && extrax[1] != 1242) {
    dialogue_status = true;
    words = [
      "hadao:เฮ้อ...รอดตายแล้วสิ ขอบใจนายมาก",
      "sander:เกิดอะไรขึ้นที่นี่กันแน่? นายช่วยเล่าให้ฉันฟังทีสิ",
      "hadao:นายไปอยู่ที่ไหนมาถึงได้ไม่รู้เรื่องอะไรเลย",
      "hadao:ก็พวกไก่อรุณน่ะสิ มันไม่ยอมให้ไก่ทมิฬ<br>ใช้อวกาศร่วมกับพวกมัน",
      "hadao:พวกเราได้ทำการประท้วงและต่อต้าน พวกมันจึง<br>คิดจะกำจัดฉันที่เป็นแกนนำเพื่อจบเรื่อง",
      "hadao:แต่นายก็ดันมาช่วยฉันไว้ได้ซะก่อน...",
      "hadao:ดูจากที่พวกมันเห็นนายแล้วรีบหนีไปแบบนั้น<br>แสดงว่านายคงจะพอมีฝีมือสินะ",
      "hadao:สนใจเข้าร่วมกลุ่มกับพวกฉัน เพื่อให้ไก่ทมิฬ<br>ได้ใช้อวกาศอีกครั้งมั้ยล่ะ",
      "sander:เอาสิ...ในเมื่อฉันไม่มีที่ไปอยู่แล้ว ฉันจะเป็นกำลัง<br>ให้พวกนายเอง",
      "hadao:เป็นคำตอบที่ดี! ถ้างั้นฉันจะมอบอาวุธนี้ให้กับ<br>นายไปใช้ต่อสู้กับพวกไก่เผด็จการนั่นละกัน",
    ];
    extrax[1] -= 6;
    drawExtra();
    currentEvent = 5;
  }
  if (
    positionX >= 1008 &&
    positionX <= 1182 &&
    positionY >= 66 &&
    positionY <= 180 &&
    currentEvent == 5 &&
    !dialogue_status &&
    !inventory.includes("sword")
  ) {
    ctx.drawImage(swordf, positionX + 144, positionY + 42);
    if (keyPresses.KeyF && !inventory.includes("sword")) {
      inventory.push("sword");
      itemsound.play();
      sword_status = true;
      currentEvent = 6;
    }
  }
  if (currentEvent == 6) {
    dialogue_status = true;
    words = [
      "hadao:เพื่อเป็นการทดสอบความจริงใจของนาย<br>ฉันหวังว่าจะเจอนายที่ค่ายของพวกเรานะ",
      "hadao:หวังว่านายจะไม่ผิดคำพูด",
    ];
    currentLoopIndex_extra = 0;
    currentEvent = 7;
  }
  if (currentEvent >= 7 && currentEvent <= 8 && !dialogue_status) {
    if (extray[1] == 138) {
      document.getElementById("myModal").style.display = "flex";
    }
    if (extray[1] < 648) {
      extray[1] += 6;
      drawExtra();
    } else if (extrax[1] < 2000) {
      currentEvent = 8;
      extrax[1] += 6;
      drawExtra();
    }
  }

  /* GAME EVENT Bg2 */
  if (
    currentEvent == 8 &&
    checkpoint == 2 &&
    positionX >= 1280 &&
    !worm_check
  ) {
    fight_status = true;
  }
  if (
    checkpoint == 2 &&
    positionX >= monster_posx[0] - 120 &&
    positionX <= monster_posx[0] + 324 &&
    positionY >= monster_posy[0] - 115 &&
    positionY <= monster_posy[0] + 115 &&
    worm_check &&
    !dialogue_status &&
    !inventory.includes("gun")
  ) {
    ctx.drawImage(wormf, positionX + 144, positionY + 42);
    if (keyPresses.KeyF && !inventory.includes("gun")) {
      inventory.push("gun");
      itemsound.play();
      gun_status = true;
      comic = true;
      document.getElementById("comic-container").style.display = "flex";
      document.getElementById("comic-container").style.backgroundImage =
        "url('https://cdn.discordapp.com/attachments/933591523189215235/972361806041477150/2_6.jpg')";
      document.getElementById("comic-container").style.animationName = "comic2";
      document.getElementById("comic-container").style.animationDuration = "8s";
    }
  }
  if (
    currentEvent == 9 &&
    document.getElementById("comic-container").style.display == "none"
  ) {
    document.getElementById("myModal").style.display = "flex";
    document.getElementById("modal-innertext").innerHTML =
      "<img src='image/gun_inhand_r.png' style='width:30vh'><br><br>คุณได้รับ ปืนเลเซอร์";
    currentEvent = 10;
  }

  /* GAME EVENT Bg3 */
  if (
    checkpoint == 3 &&
    positionX >= 90 &&
    positionX <= 230 &&
    positionY >= 320 &&
    positionY <= 540
  ) {
    if (currentEvent == 10 || currentEvent == 11.2) {
      ctx.drawImage(wichianf, positionX + 144, positionY + 42);
    }
    if (currentEvent == 10 && !dialogue_status && keyPresses.KeyF) {
      dialogue_status = true;
      words = [
        "wichian:นายนี่ฝีมือไม่ธรรมดาเลยนะ",
        "sander:???",
        "wichian:ฮาดาวเล่าให้ฉันฟังหมดแล้ว",
        "wichian:ฉันนึกว่านายจะใช้ทางลับเหมือนกับไก่ตัวอื่นๆ<br>ซะอีก",
        "wichian:แต่นายกลับต่อสู้กับหนอนที่ขโมยเสบียงและปืน<br>ของพวกเราไปอย่างกล้าหาญ",
        "sander:(ฉันสู้เพราะหาทางลับอะไรนั่นไม่เจอต่างหาก...)",
        "wichian:นายสงสัยล่ะสิว่าแผลเป็นที่ตาของฉันได้มาได้ยังไง",
        "wichian:ตั้งแต่ที่พวกไก่อรุณยึดอวกาศไป เสบียงและ<br>อาวุธของพวกเราก็ขาดแคลนอย่างหนัก",
        "wichian:ฉันได้ไปสู้กับพวกไก่อรุณอยู่ครั้งนึง<br>แต่ว่าก็สู้ไม่ได้...",
        "wichian:นี่แหละ ที่มาของแผลเป็นที่ตานี้",
      ];
      currentEvent = 11.1;
    }
    if (currentEvent == 11.2 && !dialogue_status && keyPresses.KeyF) {
      dialogue_status = true;
      words = [
        "wichian:นายนี่ฝีมือไม่ธรรมดาเลยนะ",
        "sander:???",
        "wichian:ฮาดาวเล่าให้ฉันฟังหมดแล้ว",
        "wichian:ฉันนึกว่านายจะใช้ทางลับเหมือนกับไก่ตัวอื่นๆ<br>ซะอีก",
        "wichian:แต่นายกลับต่อสู้กับหนอนที่ขโมยเสบียงและปืน<br>ของพวกเราไปอย่างกล้าหาญ",
        "sander:(ฉันสู้เพราะหาทางลับอะไรนั่นไม่เจอต่างหาก...)",
        "wichian:นายสงสัยล่ะสิว่าแผลเป็นที่ตาของฉันได้มาได้ยังไง",
        "wichian:ตั้งแต่ที่พวกไก่อรุณยึดอวกาศไป เสบียงและ<br>อาวุธของพวกเราก็ขาดแคลนอย่างหนัก",
        "wichian:ฉันได้ไปสู้กับพวกไก่อรุณอยู่ครั้งนึง<br>แต่ว่าก็สู้ไม่ได้...",
        "wichian:นี่แหละ ที่มาของแผลเป็นที่ตานี้",
      ];
      currentEvent = 12.2;
    }
  }
  if (
    checkpoint == 3 &&
    positionX >= 650 &&
    positionX <= 750 &&
    positionY >= 90 &&
    positionY <= 250
  ) {
    if (currentEvent == 10 || currentEvent == 11.1) {
      ctx.drawImage(hadaof, positionX + 144, positionY + 42);
    }
    if (currentEvent == 11.1 && !dialogue_status && keyPresses.KeyF) {
      dialogue_status = true;
      words = [
        "sander:นี่นาย ที่โดนขังเมื่อตอนแรกหนิ?",
        "sander:มาแอบอะไรอยู่ตรงนี้...?",
        "hadao:ก็ต้องแอบน่ะสิ ถ้าโดนพวกนั้นจับไปอีกรอบ<br>จะทำยังไง!",
      ];
      currentEvent = 12.1;
    }
    if (currentEvent == 10 && !dialogue_status && keyPresses.KeyF) {
      dialogue_status = true;
      words = [
        "sander:นี่นาย ที่โดนขังเมื่อตอนแรกหนิ?",
        "sander:มาแอบอะไรอยู่ตรงนี้...?",
        "hadao:ก็ต้องแอบน่ะสิ ถ้าโดนพวกนั้นจับไปอีกรอบ<br>จะทำยังไง!",
      ];
      currentEvent = 11.2;
    }
  }

  /* GAME EVENT Bg4 */
  if (checkpoint == 4 && currentEvent == 10) {
    comic = true;
    document.getElementById("comic-container").style.display = "flex";
    document.getElementById("comic-container").style.backgroundImage =
      "url('comic/3_6.jpg')";
    document.getElementById("comic-container").style.animationName = "comic3";
    document.getElementById("comic-container").style.animationDuration = "8s";
  }
  if (
    checkpoint == 4 &&
    positionX >= 990 &&
    positionX <= 1150 &&
    positionY >= 400 &&
    positionY <= 565 &&
    currentEvent == 11 &&
    !dialogue_status &&
    !axeon_check
  ) {
    if (!fight_status) {
      ctx.drawImage(axeonf, positionX + 144, positionY + 42);
    }
    if (keyPresses.KeyF && currentEvent == 11) {
      dialogue_status = true;
      words = [
        "sander:ให้พวกเราเข้าไปที!",
        "axeon:ไม่มีใครจะเข้าไปได้ทั้งนั้น<br>ถ้าไม่ได้รับอนุญาตจากบอส!",
        "sander:แกลองมองดูพวกชาวบ้านอดอยากพวกนี้ดูสิ<br>จะไม่ยอมให้พวกเราเข้าไปจริงๆอย่างนั้นหรอ!",
        "axeon:เรื่องของพวกมันสิ และมันก็ไม่ใช่ธุระของแก<br>ที่จะมาสั่งฉันด้วย!",
        "sander:ไอ้ไก่ไม่มีจิตใจ! ฉันจะจับแกทำไก่ทอดซะ!!",
        "axeon:แน่จริงก็เข้ามา!!!",
      ];
      currentEvent = 12;
    }
  }
  if (
    checkpoint == 4 &&
    ((currentEvent == 12 &&
      !dialogue_status &&
      positionX >= 990 &&
      positionX <= 1150) ||
      positionX >= 1280) &&
    !axeon_check
  ) {
    fight_status = true;
  }

  /* GAME EVENT Bg5 */
  if (
    currentEvent == 12 &&
    !dialogue_status &&
    checkpoint == 5 &&
    axeon_check
  ) {
    dialogue_status = true;
    words = [
      "bunchun:ยังรอดมาถึงตรงนี้ได้ ตายยากจังนะแกเนี่ย",
      "sander:แกหมายความว่ายังไง?",
      "bunchun:เอาชนะฉันให้ได้สิ! แต่ถึงชนะฉันไปแกก็ไม่มีทาง<br>รู้ความจริงอยู่ดี ฮ่าๆๆ",
      "sander:เดี๋ยวจะได้เห็นดีกัน!!!",
    ];
    currentEvent = 13;
  }
  if (currentEvent == 13 && !dialogue_status) {
    fight_status = true;
  }
  if (
    positionX >= monster_posx[2] - 120 &&
    positionX <= monster_posx[2] + 192 + 120 &&
    positionY >= monster_posy[2] - 115 &&
    positionY <= monster_posy[2] + 115 &&
    bunchun_check &&
    !dialogue_status &&
    currentEvent == 13
  ) {
    ctx.drawImage(bunchunf, positionX + 144, positionY + 42);
    if (keyPresses.KeyF && currentEvent == 13) {
      itemsound.play();
      comic = true;
      document.getElementById("comic-container").style.display = "flex";
      document.getElementById("comic-container").style.backgroundImage =
        "url('comic/4_4.jpg')";
      document.getElementById("comic-container").style.animationName = "comic4";
      document.getElementById("comic-container").style.animationDuration = "8s";
    }
  }

  /* GAME EVENT Bg6 */
  if (checkpoint == 6 && currentEvent == 14 && !dialogue_status && !comic) {
    words = [
      "mcdo:ในที่สุด...แกก็กลับมานะเมี้ยว",
      "sander:ฉันรู้นะจริงๆแล้วแกไม่ได้เป็นทั้ง<br>ไก่อรุณและไก่ทมิฬน่ะ",
      "sander:แก...เป็นใครกันแน่!!",
      "mcdo:ไหนๆวันนี้ก็เป็นวันตายของแก ฉันจะบอกให้<br>เอาบุญก็แล้วกัน",
      "mcdo:แกอาจจะไม่เคยได้ยิน ฉันน่ะมาจากเผ่ามังกรฟ้า<br>ที่ห่างไกลออกไปหลายพันล้านปีแสง",
      "mcdo:และแกก็ยังเป็นคนสนิทของฉันอีกด้วย<br>แต่ว่าแกกลับ...",
      "mcdo:คิดทรยศ และจะแย่งทั้งยานอวกาศและข้อมูล<br>ทุกอย่างไว้เป็นของแกคนเดียว!",
      "mcdo:โชคดีที่ฉันรู้ทันแผนโง่ๆ นั่นของแกทั้งหมดก่อน",
      "sander:ฉันจะจัดการแกซะ! อวกาศจะได้<br>กลับมาเป็นของทุกคนอีกครั้ง!",
      "mcdo:ก็ลองดูสิ ถ้าแกอยากกลับไปเริ่มใหม่ที่ทะเลทรายนั่น<br>อีกรอบ!",
    ];
    dialogue_status = true;
    currentEvent = 15;
    monster_action = 0;
  }
  if (checkpoint == 6 && currentEvent == 15 && !dialogue_status) {
    fight_status = true;
  }
  if (
    checkpoint == 6 &&
    currentEvent == 15 &&
    hp_monster <= 75 &&
    !mouseclick &&
    !keyPresses.Space
  ) {
    comic = true;
    fight_status = false;
    document.getElementById("comic-container").style.display = "flex";
    document.getElementById("comic-container").style.backgroundImage =
      "url('comic/5_7.jpg')";
    document.getElementById("comic-container").style.animationName = "comic5";
    document.getElementById("comic-container").style.animationDuration = "10s";
  }
  if (
    checkpoint == 6 &&
    currentEvent == 17 &&
    mcdo_check &&
    !fight_status &&
    !mouseclick &&
    !keyPresses.Space
  ) {
    comic = true;
    document.getElementById("comic-container").style.display = "flex";
    document.getElementById("comic-container").style.backgroundImage =
      "url('comic/6_6.jpg')";
    document.getElementById("comic-container").style.animationName = "comic6";
    document.getElementById("comic-container").style.animationDuration = "10s";
  }

  if (currentEvent >= 18) {
    document.getElementById("inner").style.display = "none";
    document.getElementById("information").style.display = "none";
  }

  if (fight_status) {
    document.getElementById("information").style.display = "none";
  } else {
    document.getElementById("information").style.display = "flex";
  }

  if (checkpoint == 2 && fight_status && hp_monster > 0 && hp_sander > 0) {
    if (monster_move && fight_status && monster_posy[0] < positionY) {
      monster_posy[0] += monster_speed;
      monster_action = 2;
      wormwalksound.play();
    }
    if (monster_move && fight_status && monster_posy[0] > positionY) {
      monster_posy[0] -= monster_speed;
      monster_action = 0;
      wormwalksound.play();
    }
    if (
      monster_move &&
      fight_status &&
      monster_posx[0] < positionX &&
      positionY + 81 >= monster_posy[0] &&
      positionY + 81 <= monster_posy[0] + 324
    ) {
      monster_posx[0] += monster_speed / 2;
      monster_action = 1;
      wormwalksound.play();
    }
    if (
      monster_move &&
      fight_status &&
      monster_posx[0] > positionX &&
      positionY + 81 >= monster_posy[0] &&
      positionY + 81 <= monster_posy[0] + 324
    ) {
      monster_posx[0] -= monster_speed / 2;
      monster_action = 3;
      wormwalksound.play();
    }
    if (
      fight_status &&
      Math.abs(positionX + 162 / 2 - (monster_posx[0] + 324 / 2)) <=
        162 / 2 + 324 / 2 - 60 &&
      Math.abs(positionY + 162 / 2 - (monster_posy[0] + 226.25 / 2)) <= 100
    ) {
      if (monster_move) {
        currentLoopIndex_monster = 0;
        monster_move = false;
      }
      monster_attack = true;
    }
  }

  if (checkpoint == 4 && fight_status && hp_monster > 0 && hp_sander > 0) {
    monster_speed = 4;
    if (
      monster_move &&
      fight_status &&
      monster_posy[1] + 305 < positionY + 162
    ) {
      monster_posy[1] += monster_speed;
      monster_action = 2;
      chickenwalksound.play();
    }
    if (
      monster_move &&
      fight_status &&
      monster_posy[1] + 305 > positionY + 162
    ) {
      monster_posy[1] -= monster_speed;
      monster_action = 0;
      chickenwalksound.play();
    }
    if (
      monster_move &&
      fight_status &&
      monster_posx[1] + 324 / 2 < positionX + 162 / 2 &&
      (positionY + 162 >= monster_posy[1] + 305 ||
        positionY <= monster_posy[1] + 162) &&
      !(
        monster_posx[1] + (1 / 2) * 324 - 81 < positionX + 162 / 2 &&
        monster_posx[1] + (1 / 2) * 324 + 81 > positionX + 162 / 2
      )
    ) {
      if (monster_action == 2 || monster_action == 0) {
        monster_speed /= Math.sqrt(2);
      }
      monster_posx[1] += monster_speed;
      monster_action = 1;
      chickenwalksound.play();
    }
    if (
      monster_move &&
      fight_status &&
      monster_posx[1] + 324 / 2 > positionX + 162 / 2 &&
      (positionY + 162 >= monster_posy[1] + 305 ||
        positionY <= monster_posy[1] + 162) &&
      !(
        monster_posx[1] + (1 / 2) * 324 - 81 < positionX + 162 / 2 &&
        monster_posx[1] + (1 / 2) * 324 + 81 > positionX + 162 / 2
      )
    ) {
      if (monster_action == 2 || monster_action == 0) {
        monster_speed /= Math.sqrt(2);
      }
      monster_posx[1] -= monster_speed;
      monster_action = 3;
      chickenwalksound.play();
    }
    if (
      fight_status &&
      temp_x == 0 &&
      temp_y == 0 &&
      ((positionX + 81 - (monster_posx[1] + 162)) ** 2 +
        (positionY + 81 - (monster_posy[1] + 162)) ** 2) **
        0.5 >=
        450
    ) {
      temp_x = positionX + 81 - monster_posx[1] - 162;
      temp_y = positionY + 25 - monster_posy[1] - 162;
      posatmx = positionX + 81;
      posatmy = positionY + 25;
      if (temp_x >= 0) {
        temp_x += 100;
        posatmx += 100;
      } else {
        temp_x -= 100;
        posatmx -= 100;
      }
      if (temp_y >= 0) {
        temp_y += 25;
        posatmy += 25;
      } else {
        temp_y -= 25;
        posatmy -= 25;
      }
      if (monster_move) {
        currentLoopIndex_monster = 0;
        monster_move = false;
      }
      monster_attack = true;
    } else if (
      fight_status &&
      Math.abs(positionX + 81 - (monster_posx[1] + 162)) <= 100 &&
      Math.abs(positionY + 40 - (monster_posy[1] + 162)) <= 100
    ) {
      if (monster_move) {
        currentLoopIndex_monster = 0;
        monster_move = false;
      }
      monster_attack = true;
    }
  }

  if (checkpoint == 5 && fight_status && hp_monster > 0 && hp_sander > 0) {
    if (bunchun_phase > 1) {
      monster_speed = 4;
      steelstepsound.play();
      if (
        monster_move &&
        fight_status &&
        monster_posy[2] + 174 < positionY + 162
      ) {
        monster_posy[2] += monster_speed;
        monster_action = 2;
        steelstepsound.play();
      }
      if (
        monster_move &&
        fight_status &&
        monster_posy[2] + 174 > positionY + 162
      ) {
        monster_posy[2] -= monster_speed;
        monster_action = 0;
        steelstepsound.play();
      }
      if (
        monster_move &&
        fight_status &&
        monster_posx[2] + 192 / 2 < positionX + 162 / 2 &&
        (positionY + 162 >= monster_posy[2] + 174 ||
          positionY <= monster_posy[2] + 162) &&
        !(
          monster_posx[2] + (1 / 2) * 192 - 81 < positionX + 162 / 2 &&
          monster_posx[2] + (1 / 2) * 192 + 81 > positionX + 162 / 2
        )
      ) {
        monster_posx[2] += monster_speed;
        monster_action = 1;
        steelstepsound.play();
      }
      if (
        monster_move &&
        fight_status &&
        monster_posx[2] + 192 / 2 > positionX + 162 / 2 &&
        (positionY + 162 >= monster_posy[2] + 174 ||
          positionY <= monster_posy[2] + 162) &&
        !(
          monster_posx[2] + (1 / 2) * 192 - 81 < positionX + 162 / 2 &&
          monster_posx[2] + (1 / 2) * 192 + 81 > positionX + 162 / 2
        )
      ) {
        monster_posx[2] -= monster_speed;
        monster_action = 3;
        steelstepsound.play();
      }
      if (
        bunchun_phase == 2 &&
        fight_status &&
        Math.abs(positionX + 81 - (monster_posx[2] + 96)) <= 90 &&
        Math.abs(positionY + 81 - (monster_posy[2] + 96)) <= 100
      ) {
        if (monster_move) {
          currentLoopIndex_monster = 0;
          monster_move = false;
        }
        monster_attack = true;
      }
    }
    if (
      monster_bulletx == -100 &&
      Math.abs(positionX + 81 - (monster_posx[2] + 96)) >= 500 &&
      currentLoopIndex_monster == 3 &&
      bunchun_phase == 1
    ) {
      monster_action = 4;
      monster_attack = true;
      monster_bulletx = monster_posx[2];
    }
    if (
      (Math.abs(positionX + 81 - (monster_posx[2] + 96)) < 500 &&
        Math.abs(positionY + 81 - (monster_posy[2] + 96)) < 500) ||
      hp_monster <= 125
    ) {
      bunchun_phase = 2;
    }
  }

  if (
    checkpoint == 5 &&
    monster_bulletx == -100 &&
    Math.abs(positionX + 81 - (monster_posx[2] + 96)) >= 500 &&
    currentLoopIndex_monster == 3 &&
    bunchun_phase == 1
  ) {
    monster_action = 4;
    monster_attack = true;
    monster_bulletx = monster_posx[2];
  }

  if (checkpoint == 6 && fight_status && hp_monster > 0 && hp_sander > 0) {
    monster_speed = 2;
    monster_attack = true;
    if (
      monster_move &&
      fight_status &&
      monster_posy[3] + 180 < positionY + 162
    ) {
      monster_posy[3] += monster_speed + 1;
      monster_action = 2;
      finalbosswalksound.play();
    }
    if (
      monster_move &&
      fight_status &&
      monster_posy[3] + 180 > positionY + 162
    ) {
      monster_posy[3] -= monster_speed + 1;
      monster_action = 0;
      finalbosswalksound.play();
    }
    if (
      monster_move &&
      fight_status &&
      monster_posx[3] + 360 / 2 < positionX + 162 / 2 &&
      (positionY + 162 >= monster_posy[3] + 360 ||
        positionY <= monster_posy[2] + 162) &&
      !(
        monster_posx[3] + (1 / 2) * 360 - 81 < positionX + 162 / 2 &&
        monster_posx[3] + (1 / 2) * 360 + 81 > positionX + 162 / 2
      )
    ) {
      monster_posx[3] += monster_speed;
      monster_action = 1;
      finalbosswalksound.play();
    }
    if (
      monster_move &&
      fight_status &&
      monster_posx[3] + 360 / 2 > positionX + 162 / 2 &&
      (positionY + 162 >= monster_posy[3] + 360 ||
        positionY <= monster_posy[2] + 162) &&
      !(
        monster_posx[3] + (1 / 2) * 360 - 81 < positionX + 162 / 2 &&
        monster_posx[3] + (1 / 2) * 360 + 81 > positionX + 162 / 2
      )
    ) {
      monster_posx[3] -= monster_speed;
      monster_action = 3;
      finalbosswalksound.play();
    }
    if (
      fight_status &&
      Math.abs(positionX + 81 - (monster_posx[3] + 180)) <= 450 &&
      Math.abs(positionY + 81 - (monster_posy[3] + 180)) <= 100
    ) {
      if (monster_move) {
        currentLoopIndex_monster = 0;
        monster_move = false;
      }
      monster_attack = true;
    }

    // if (fight_status && Math.abs((positionX + 81) - (monster_posx[3] + 180)) <= 250 && Math.abs((positionY + 81) - (monster_posy[3] + 180)) <= 250) {
    //     monster_move = true
    // }
  }

  if (
    (fight_status && monster_attack && hp_monster > 0 && hp_sander > 0) ||
    (checkpoint == 4 && monster_attack == false)
  ) {
    if (checkpoint == 2) {
      if (positionX >= monster_posx[0]) {
        monster_action = 6;
        wormhitsound.play();
      } else {
        monster_action = 5;
        wormhitsound.play();
      }
    }

    if (checkpoint == 4) {
      if (
        fight_status &&
        monster_action != 5 &&
        monster_action != 6 &&
        Math.abs(positionX + 81 - (monster_posx[1] + 162)) <= 100 &&
        Math.abs(positionY + 40 - (monster_posy[1] + 162)) <= 100
      ) {
        if (monster_posy[1] + 162 > positionY + 81) {
          monster_action = 8;
          mon4hitsound.play();
        } else {
          monster_action = 4;
          mon4hitsound.play();
        }
      } else if (
        ((posatmx - (monster_posx[1] + 162)) ** 2 +
          (posatmy - (monster_posy[1] + 162)) ** 2) **
          0.5 >=
          50 &&
        monster_action != 4 &&
        monster_action != 8 &&
        monster_attack == true
      ) {
        if (monster_posx[1] > positionX && monster_action != 6) {
          monster_action = 5;
          chargersound.play();
        } else if (monster_posx[1] < positionX && monster_action != 5) {
          monster_action = 6;
          chargersound.play();
        }
        monster_posx[1] += temp_x / 25;
        monster_posy[1] += temp_y / 25;
      }
      if (
        ((posatmx - (monster_posx[1] + 162)) ** 2 +
          (posatmy - (monster_posy[1] + 162)) ** 2) **
          0.5 <=
        50
      ) {
        temp_x = 0;
        temp_y = 0;
        posatmx = 0;
        posatmy = 0;
      }
    }

    if (checkpoint == 5) {
      if (bunchun_phase == 2) {
        if (
          Math.abs(positionX + 81 - (monster_posx[2] + 96)) <= 90 &&
          Math.abs(positionY + 81 - (monster_posy[2] + 96)) <= 100
        ) {
          monster_action = 5;
        }
      }
      if (bunchun_phase == 1) {
        if (
          monster_action == 4 ||
          (monster_action != 4 && monster_bulletx >= -100)
        ) {
          monster_bulletx -= 12;
        }
        if (
          Math.abs(monster_bulletx - positionX) <= 250 ||
          (monster_action == 5 && monster_bulletx >= -100)
        ) {
          ctx.drawImage(
            bunchun_action4,
            1 * 170,
            0,
            170,
            900,
            monster_bulletx,
            350,
            100,
            529
          );
          electric2sound.play();
        }
        if (
          Math.abs(monster_bulletx - positionX) <= 150 &&
          monster_bulletx > positionX &&
          monster_bulletx < positionX + 162
        ) {
          ctx.drawImage(
            bunchun_action4,
            2 * 170,
            0,
            170,
            900,
            monster_bulletx,
            350,
            100,
            529
          );
          if (
            positionY + 162 >= 350 + 70 &&
            positionY + 162 <= 350 + 529 - 70 &&
            hp_monster > 0 &&
            hp_sander > 0
          ) {
            player_takedmg = true;
            electric2sound.play();
          }
        } else {
          ctx.drawImage(
            bunchun_action4,
            0 * 170,
            0,
            170,
            900,
            monster_bulletx,
            350,
            100,
            529
          );
          electric3sound.play();
        }
        if (monster_bulletx <= -100) {
          monster_bulletx = -100;
        }
      }
    }

    if (checkpoint == 6) {
      //console.log(monster_bullet_timer, monster_move, jumpcheck, Math.abs((positionX + 81) - (monster_posx[3] + 180)), currentLoopIndex_monster)
      if (
        positionY + 81 <= monster_posy[3] + 180 + 43 &&
        positionY + 81 > monster_posy[3] + 180 - 90 &&
        positionX + 81 <= monster_posx[3] + 180 + 120 + 360 &&
        positionX + 81 > monster_posx[3] + 180 + -120 - 360 &&
        !jumpcheck
      ) {
        //harpoon
        if (currentLoopIndex_monster == 0) {
          if (positionX + 81 < monster_posx[3] + 180) {
            monster_action = 5;
          } else {
            monster_action = 7;
          }
        }
      } else if (
        positionY + 81 <= monster_posy[3] + 78 + 63 &&
        positionY + 81 >= monster_posy[3] + 78 - 63 &&
        (positionX + 81 > monster_posx[3] + 180 + 120 + 360 + 5 ||
          positionX + 81 < monster_posx[3] + 180 + -120 - 360 - 5) &&
        !jumpcheck
      ) {
        // missile
        monster_bullet_timer -= 1;
      } else if (
        positionX + 81 <= monster_posx[3] + 180 + 110 &&
        positionX + 81 >= monster_posx[3] + 180 - -110 &&
        (positionY + 81 > monster_posy[3] + 180 + 160 ||
          positionY + 81 < monster_posy[3] + 180 - 160)
      ) {
        // missile
        monster_bullet_timer -= 1;
      } else {
        monster_move = true;
      }

      if (monster_bullet_timer <= 0) {
        //ยิง missile
        rcannonsound.play();
        if (currentLoopIndex_monster <= 3) {
          monster_action = 4;
          monster_move = false;
          if (!bulletout) {
            currentLoopIndex_monster = 0;
            bulletout = true;
          }
        }
        if (currentLoopIndex_monster == 3 && bulletout) {
          cannonsound.play();
          monster_bulletx = monster_posx[3] + 78;
          monster_bullety = monster_posy[3] + 78;
          if (positionX >= monster_posx[3]) {
            monster_bullet_posxy.push([
              monster_bulletx - 156,
              monster_bullety - 78,
              "right",
              0,
            ]);
            tracktime = 120;
          } else if (positionX <= monster_posx[3]) {
            monster_bullet_posxy.push([
              monster_bulletx,
              monster_bullety - 78,
              "left",
              0,
            ]);
            tracktime = 120;
          }
          monster_bullet_timer = 100;
          bulletout = false;
          monster_move = true;
        }
      }

      if (monster_action == 5 && currentLoopIndex_monster >= 3) {
        ctx.drawImage(
          harpoonr,
          monster_posx[3] - 295,
          monster_posy[3] + 145,
          360,
          48
        );
        if (
          Math.abs(positionX + 81 - (monster_posx[3] - 295 + 180)) <= 420 &&
          Math.abs(positionY + 81 - (monster_posy[3] + 145 + 24) <= 55)
        ) {
          monster_attack = true;
          player_takedmg = true;
          spearsound.play();
        }
      }
      if (monster_action == 7 && currentLoopIndex_monster >= 3) {
        ctx.drawImage(
          harpoonl,
          monster_posx[3] + 295,
          monster_posy[3] + 145,
          360,
          48
        );
        if (
          Math.abs(positionX + 81 - (monster_posx[3] + 360 - 295 + 180)) <=
            420 &&
          Math.abs(positionY + 81 - (monster_posy[3] + 145 + 24) <= 55)
        ) {
          monster_attack = true;
          player_takedmg = true;
          spearsound.play();
        }
      }
    }

    /* ตีเข้ามอน */
    if (
      fight_status &&
      hp_monster > 0 &&
      hp_sander > 0 &&
      playerhit &&
      currentLoopIndex >= 2 &&
      currentLoopIndex <= 3
    ) {
      if (
        (Math.abs(positionX + 162 / 2 - (monster_posx[0] + 324 / 2)) <=
          162 / 2 + 324 / 2 - 60 &&
          Math.abs(positionY + 162 / 2 - (monster_posy[0] + 226.25 / 2)) <=
            100 &&
          checkpoint != 6) ||
        (Math.abs(positionX + 81 - (monster_posx[1] + 162)) <= 100 &&
          Math.abs(positionY + 40 - (monster_posy[1] + 162)) <= 100 &&
          checkpoint != 6) ||
        (Math.abs(positionX + 81 - (monster_posx[2] + 96)) <= 350 &&
          Math.abs(positionY + 81 - (monster_posy[2] + 96)) <= 100 &&
          checkpoint != 6) ||
        (Math.abs(positionX + 81 - (monster_posx[3] + 180)) <= 150 &&
          Math.abs(positionY + 81 - (monster_posy[3] + 180)) <= 150)
      ) {
        if (
          (monster_posy[0] < positionY && currentDirection == FACING_UP) ||
          (monster_posy[1] < positionY && currentDirection == FACING_UP) ||
          (monster_posy[0] > positionY && currentDirection == FACING_DOWN) ||
          (monster_posy[1] > positionY && currentDirection == FACING_DOWN) ||
          (monster_posx[0] < positionX && currentDirection == FACING_LEFT) ||
          (monster_posx[1] < positionX && currentDirection == FACING_LEFT) ||
          (monster_posx[0] > positionX && currentDirection == FACING_RIGHT) ||
          (monster_posx[1] > positionX && currentDirection == FACING_RIGHT) ||
          (monster_posy[2] < positionY && currentDirection == FACING_UP) ||
          (monster_posy[2] > positionY && currentDirection == FACING_DOWN) ||
          (monster_posx[2] < positionX && currentDirection == FACING_LEFT) ||
          (monster_posx[2] > positionX && currentDirection == FACING_RIGHT)
        ) {
          monster_takedmg = true;
        }
        if (checkpoint == 6) {
          monster_takedmg = true;
        }
      }
    }

    if (monster_takedmg) {
      hit2sound.play();
      if (bullet_damage) {
        hp_monster -= 0.5;
        bullet_damage = false;
      } else {
        if (checkpoint == 2) {
          hp_monster -= 1;
        } else {
          hp_monster -= 0.5;
        }
      }
      if (checkpoint == 2) {
        drawFrame(
          worm_damage,
          CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
          monster_action,
          monster_posx[0],
          monster_posy[0],
          512,
          452.5,
          324,
          226.25
        );
      }
      if (checkpoint == 4) {
        drawFrame(
          axeon_damage,
          CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
          monster_action,
          monster_posx[1],
          monster_posy[1],
          512,
          512,
          324,
          324
        );
      }
      if (checkpoint == 5) {
        drawFrame(
          bunchun_damage,
          CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
          monster_action,
          monster_posx[2],
          monster_posy[2],
          512,
          512,
          192,
          192
        );
        metalhitsound.play();
      }
      if (checkpoint == 6) {
        drawFrame(
          mcdo_damage,
          CYCLE_LOOP_MONSTER[currentLoopIndex_monster],
          monster_action,
          monster_posx[3],
          monster_posy[3],
          512,
          512,
          360,
          360
        );
        warningsound.play();
      }
      if (hp_monster <= 0) {
        currentLoopIndex_monster = 0;
        if (checkpoint == 2) {
          monster_action = 4;
          wormwalksound.pause();
        }
        if (checkpoint == 4) {
          monster_action = 7;
          mon4diedsound.play();
          chickenwalksound.pause();
        }
        if (checkpoint == 5) {
          monster_action = 7;
          minibossendsound.play();
          steelstepsound.pause();
        }
        if (checkpoint == 6) {
          monster_action = 8;
          minibossendsound.play();
          finalbosswalksound.pause();
          endingsound.play();
        }
      }
      monster_takedmg = false;
    }

    if (
      fight_status &&
      hp_monster > 0 &&
      hp_sander > 0 &&
      monster_attack &&
      currentLoopIndex_monster >= 2 &&
      currentLoopIndex_monster <= 3
    ) {
      if (
        (Math.abs(positionX + 162 / 2 - (monster_posx[0] + 324 / 2)) <=
          162 / 2 + 324 / 2 - 60 &&
          Math.abs(positionY + 162 / 2 - (monster_posy[0] + 226.25 / 2)) <=
            100 &&
          !worm_check &&
          checkpoint == 2) ||
        (Math.abs(positionX + 81 - (monster_posx[1] + 162)) <= 100 &&
          Math.abs(positionY + 40 - (monster_posy[1] + 162)) <= 100 &&
          (monster_action == 4 || monster_action == 8) &&
          !axeon_check &&
          checkpoint == 4) ||
        (Math.abs(positionX + 81 - (monster_posx[1] + 162)) <= 80 &&
          Math.abs(positionY + 40 - (monster_posy[1] + 162)) <= 60 &&
          (monster_action == 5 || monster_action == 6) &&
          !axeon_check &&
          checkpoint == 4)
      ) {
        player_takedmg = true;
      }
    } else {
      if (checkpoint != 5 && checkpoint != 6) {
        player_takedmg = false;
      }
    }

    if (
      fight_status &&
      hp_monster > 0 &&
      hp_sander > 0 &&
      monster_attack &&
      currentLoopIndex_monster >= 3
    ) {
      if (
        Math.abs(positionX + 81 - (monster_posx[2] + 96)) <= 200 &&
        Math.abs(positionY + 81 - (monster_posy[2] + 96)) <= 100 &&
        monster_action == 5 &&
        bunchun_phase == 2 &&
        !bunchun_check
      ) {
        player_takedmg = true;
      }
    }

    if (player_takedmg) {
      hitsound.play();
      if (checkpoint == 2) {
        hp_sander -= 0.5;
      }
      if (checkpoint == 4) {
        if (monster_action == 4 || monster_action == 8) {
          hp_sander -= 0.5;
        } else {
          hp_sander -= 1;
        }
      }
      if (checkpoint == 5) {
        if (monster_action == 4) {
          hp_sander -= 2.5;
        }
        if (monster_action == 5) {
          hp_sander -= 2;
        }
      }
      if (checkpoint == 6 && !bossbullet_damage) {
        hp_sander -= 0.5;
        if (hp_monster + 0.5 <= 150) {
          hp_monster += 0.5;
        }
      }
      if (checkpoint == 6 && bossbullet_damage) {
        cannonhitsound.play();
        hp_sander -= 1;
      }
      if (sander_current == sander) {
        drawFrame(
          sander_damage,
          CYCLE_LOOP[currentLoopIndex],
          currentDirection,
          positionX,
          positionY,
          512,
          512,
          162,
          162
        );
      }
      if (sander_current == sander_sword) {
        drawFrame(
          sander_sword_damage,
          CYCLE_LOOP[currentLoopIndex],
          currentDirection,
          positionX,
          positionY,
          512,
          512,
          162,
          162
        );
      }
      if (sander_current == sander_weapon) {
        drawFrame(
          sander_weapon_damage,
          CYCLE_LOOP[currentLoopIndex],
          currentDirection,
          positionX,
          positionY,
          512,
          512,
          162,
          162
        );
      }
      if (hp_sander <= 0) {
        deadsound.play();
        dead2sound.play();
        steelstepsound.pause();
        chickenwalksound.pause();
        wormwalksound.pause();
        finalbosswalksound.pause();
        dead_status = true;
        currentLoopIndex = 0;
        currentDirection = 4;
      }
      if (checkpoint == 5 || (checkpoint == 6 && !bossbullet_damage)) {
        player_takedmg = false;
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
      if (checkpoint == 5 && bunchun_phase > 1) {
        monster_attack = false;
        monster_move = true;
      }
    }
  }

  /* เช็คมอน */
  if (fight_status && hp_monster <= 0) {
    if (currentLoopIndex_monster > 3) {
      fight_status = false;
    }
    if (checkpoint == 2 && !worm_check) {
      worm_check = true;
    }
    if (checkpoint == 4 && !axeon_check) {
      axeon_check = true;
    }
    if (checkpoint == 5 && !bunchun_check) {
      bunchun_check = true;
    }
    if (checkpoint == 6 && !mcdo_check) {
      mcdo_check = true;
      currentEvent = 17;
    }
  }

  if (fight_status && hp_sander <= 0) {
    fight_status = false;
    monster_attack = false;
    monster_move = true;
  }

  document.getElementsByClassName("close")[0].onclick = function () {
    document.getElementById("myModal").style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
    if (event.target == document.getElementById("mySetting")) {
      document.getElementById("mySetting").style.display = "none";
    }
  };

  if (hp_sander <= 0) {
    document.getElementById("dead").style.display = "flex";
  } else {
    document.getElementById("dead").style.display = "none";
  }
  if (fade_status) {
    fade();
  }
  if (dialogue_status) {
    dialogue();
  }

  window.requestAnimationFrame(gameLoop);
  objstatus = false;
  objposX = [];
  objposY = [];
  objposXY = [];
}

function moveCharacter(deltaX, deltaY, direction) {
  if (
    positionX + 24 + deltaX > 0 &&
    positionX + SCALED_WIDTH - 24 + deltaX < canvas.width
  ) {
    positionX += deltaX;
  }
  if (
    positionY + deltaY > 0 &&
    positionY + SCALED_HEIGHT + deltaY < canvas.height
  ) {
    positionY += deltaY;
  }
  currentDirection = direction;
}

function walkCollison(rectposx, rectposy, rectw, recth) {
  if (
    keyPresses.KeyW &&
    positionX + 138 > rectposx &&
    positionX + 24 + 6 < rectposx + rectw &&
    positionY > rectposy - 126 &&
    positionY < rectposy
  ) {
    movement_speed = 0;
  }
  if (
    keyPresses.KeyA &&
    positionX + 138 > rectposx &&
    positionX + 24 < rectw + rectposx + 3 &&
    positionY + 126 > rectposy &&
    positionY + 126 < recth + rectposy
  ) {
    movement_speed = 0;
  }
  if (
    keyPresses.KeyS &&
    positionX + 138 > rectposx &&
    positionX + 24 + 9 < rectposx + rectw &&
    positionY + 126 + 6 > rectposy &&
    positionY < rectposy + recth - 126
  ) {
    movement_speed = 0;
  }
  if (
    keyPresses.KeyD &&
    positionX + 138 + 6 > rectposx &&
    positionX + 24 + 18 < rectposx + rectw &&
    positionY + 126 > rectposy &&
    positionY + 126 < recth + rectposy
  ) {
    movement_speed = 0;
  }
  objposX.push(rectposx + rectw / 2);
  objposY.push(rectposy + recth);
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
  if (checkpoint == 2) {
    drawStroked("เดอะ ดวนนี่ หนอนยักษ์ดึ้บดึ้บ", "30px", 6, 500, 910);
  }
  if (checkpoint == 4) {
    drawStroked("แอ็กซีออนที่ 10 ผู้อารักขาฐานลับ", "30px", 6, 500, 910);
  }
  if (checkpoint == 5) {
    drawStroked("เดอะ บุนชุน โคชุ อัศวินเกราะเคลือบเผ็ด", "30px", 6, 500, 910);
  }
  if (checkpoint == 6) {
    drawStroked("โรนัลโดลด์ แมคโดโนลด์", "30px", 6, 500, 910);
  }
  ctx.fillStyle = "white";
  ctx.fillRect(500, 932, 901, 44);
  ctx.fillStyle = "black";
  ctx.fillRect(505, 937, 891, 34);
  ctx.fillStyle = "red";
  ctx.fillRect(510, 942, hp_monster * 5.87, 24);
}

function drawProfile(x, y) {
  if (positionX - 50 <= 500 && positionY - 265 <= 20) {
    x = 1980 - 50 - sander_pf_st.width - 370;
    document.getElementById("cog").style.transform = "translateX(112vh)";
  } else {
    document.getElementById("cog").style.transform = "translateX(0vh)";
  }
  ctx.drawImage(
    sander_pf_st,
    x,
    y - sander_pf_st.height - 50,
    sander_pf_st.width,
    sander_pf_st.height
  );
  drawStroked(
    "แซนเดอร์",
    "32px",
    6,
    x + sander_pf_st.width + 10,
    y - sander_pf_st.height - 50 + 35
  );
  ctx.fillStyle = "white";
  ctx.fillRect(
    x + sander_pf_st.width,
    y - sander_pf_st.height,
    hp_max * 2.95 + 6,
    30
  );
  ctx.fillStyle = "black";
  ctx.fillRect(
    x - 3 + sander_pf_st.width,
    y - sander_pf_st.height + 5,
    hp_max * 2.95 + 5,
    20
  );
  ctx.fillStyle = "red";
  ctx.fillRect(
    x - 3 + sander_pf_st.width,
    y - sander_pf_st.height + 10,
    hp_sander * 2.95,
    10
  );
  ctx.fillStyle = "white";
  ctx.fillRect(x + sander_pf_st.width, y - sander_pf_st.height + 38, 152, 30);
  ctx.fillStyle = "black";
  ctx.fillRect(
    x - 3 + sander_pf_st.width,
    y - sander_pf_st.height + 5 + 38,
    150,
    20
  );
  ctx.fillStyle = "yellow";
  ctx.fillRect(
    x - 3 + sander_pf_st.width,
    y - sander_pf_st.height + 10 + 38,
    energy,
    10
  );
}

function drawWeapon(x, y) {
  if (
    positionX - 50 <= 400 &&
    Math.abs(positionY - 860) <= 250 &&
    fight_status
  ) {
    x = 1980 - 50 - sander_pf_st.width - 255;
    document.getElementsByClassName("weapon-box")[0].style.transform =
      "translateX(121.8vh)";
  } else if (
    positionX - 50 <= 400 &&
    Math.abs(positionY - 860) <= 250 &&
    !fight_status
  ) {
    x = 1980 - 50 - sander_pf_st.width - 255;
    document.getElementsByClassName("weapon-box")[0].style.transform =
      "translateX(121.8vh)";
  } else {
    document.getElementsByClassName("weapon-box")[0].style.transform =
      "translateX(0vh)";
  }
  drawStroked("อาวุธมือซ้าย", "26px", 6, x + 10, 860 - 15);
  drawStroked("อาวุธมือขวา", "26px", 6, x + 15 + 166 + 28, 860 - 15);
  if (lefthand == "sword") {
    ctx.drawImage(sword, x + 20, 870, 124, 155);
  }
  if (righthand == "sword") {
    ctx.drawImage(sword, x + 215, 870, 124, 155);
  }
  if (lefthand == "gun") {
    ctx.drawImage(gun, x + 20, 870, 124, 155);
  }
  if (righthand == "gun") {
    ctx.drawImage(gun, x + 215, 870, 124, 155);
  }
}

function drawBulletMonster() {
  for (let i = 0; i < monster_bullet_posxy.length; i++) {
    if (
      monster_bullet_posxy[i][1] <= 0 ||
      monster_bullet_posxy[i][0] <= 0 ||
      monster_bullet_posxy[i][0] >= canvas.width ||
      monster_bullet_posxy[i][1] >= canvas.height
    ) {
      monster_bullet_posxy.splice(i, 1);
      i--;
      continue;
    }
    if (monster_bullet_posxy[i][2] == "right") {
      if (monster_bullet_posxy[i][0] < canvas.width) {
        monster_bullet_posxy[i][0] += 10;
      }
      boss_bullet = boss_bulletr;
    }
    if (monster_bullet_posxy[i][2] == "left") {
      if (monster_bullet_posxy[i][0] > -162) {
        monster_bullet_posxy[i][0] -= 10;
      }
      boss_bullet = boss_bulletl;
    }
    if (tracktime > 0) {
      if (positionY + 81 < monster_bullet_posxy[i][1] + 32) {
        monster_bullet_posxy[i][1] -= 4;
      } else {
        monster_bullet_posxy[i][1] += 4;
      }
      tracktime -= 1;
    }
    if (monster_bullet_posxy[i][3] > 3) {
      monster_bullet_posxy[i][3] = 3;
    }
    if (
      monster_bullet_posxy[i][2] == "right" ||
      monster_bullet_posxy[i][2] == "left"
    ) {
      ctx.drawImage(
        boss_bullet,
        monster_bullet_posxy[i][0],
        monster_bullet_posxy[i][1],
        160,
        63
      );
      if (monster_bullet_posxy[i][2] == "right") {
        if (
          monster_bullet_posxy[i][0] + 160 >= positionX &&
          monster_bullet_posxy[i][0] + 160 <= positionX + 162 &&
          monster_bullet_posxy[i][1] + 63 >= positionY &&
          monster_bullet_posxy[i][1] + 63 <= positionY + 162
        ) {
          monster_attack = true;
          player_takedmg = true;
          bossbullet_damage = true;
        } else {
          player_takedmg = false;
          bossbullet_damage = false;
        }
      }
      if (monster_bullet_posxy[i][2] == "left") {
        if (
          monster_bullet_posxy[i][0] <= positionX + 162 &&
          monster_bullet_posxy[i][0] >= positionX &&
          monster_bullet_posxy[i][1] + 63 >= positionY &&
          monster_bullet_posxy[i][1] + 63 <= positionY + 162
        ) {
          monster_attack = true;
          player_takedmg = true;
          bossbullet_damage = true;
        } else {
          player_takedmg = false;
          bossbullet_damage = false;
        }
      }
      // console.log(Math.abs((monster_bullet_posxy[i][0]+80)-(positionX+81)) , Math.abs(monster_bullet_posxy[i][1]+80)-(positionY+81))
      // if (Math.abs((monster_bullet_posxy[i][0]+80)-(positionX+81)) <= 162 && Math.abs(monster_bullet_posxy[i][1]+80)-(positionY+81) <= 162) {
      //     monster_attack = true
      //     player_takedmg = true
      // }
    }
    monster_bullet_posxy[i][3] += 1;
  }
}

function drawBullet() {
  for (let i = 0; i < bullet_posxy.length; i++) {
    if (fight_status) {
      if (
        checkpoint == 4 &&
        Math.abs(bullet_posxy[i][0] + 81 - (monster_posx[1] + 162)) <= 50 &&
        Math.abs(bullet_posxy[i][1] + 81 - (monster_posy[1] + 162)) <= 150
      ) {
        monster_takedmg = true;
        bullet_damage = true;
      }
      if (
        checkpoint == 5 &&
        Math.abs(bullet_posxy[i][0] + 81 - (monster_posx[2] + 96)) <= 50 &&
        Math.abs(bullet_posxy[i][1] + 81 - (monster_posy[2] + 96)) <= 100
      ) {
        monster_attack = true;
        monster_takedmg = true;
        bullet_damage = true;
      }
      if (
        checkpoint == 6 &&
        Math.abs(bullet_posxy[i][0] + 81 - (monster_posx[3] + 96)) <= 50 &&
        Math.abs(bullet_posxy[i][1] + 81 - (monster_posy[3] + 96)) <= 200 &&
        bullet_posxy[i][1] + 81 >= monster_posy[3]
      ) {
        monster_attack = true;
        monster_takedmg = true;
        bullet_damage = true;
      }
    }
    if (bullet_posxy[i][1] <= 0) {
      bullet_posxy.splice(i, 1);
      i--;
      continue;
    }
    if (bullet_posxy[i][2] == FACING_UP) {
      if (bullet_posxy[i][1] > -162) {
        bullet_posxy[i][1] -= 18;
      }
      bullet = bullet_w;
    }
    if (bullet_posxy[i][2] == FACING_DOWN) {
      if (bullet_posxy[i][1] < canvas.height) {
        bullet_posxy[i][1] += 18;
      }
      bullet = bullet_s;
    }
    if (bullet_posxy[i][2] == FACING_RIGHT) {
      if (bullet_posxy[i][0] < canvas.width) {
        bullet_posxy[i][0] += 18;
      }
      bullet = bullet_d;
    }
    if (bullet_posxy[i][2] == FACING_LEFT) {
      if (bullet_posxy[i][0] > -162) {
        bullet_posxy[i][0] -= 18;
      }
      bullet = bullet_a;
    }
    if (bullet_posxy[i][3] > 3) {
      bullet_posxy[i][3] = 3;
    }
    ctx.drawImage(
      bullet,
      bullet_posxy[i][3] * 162,
      162 * 0,
      162,
      162,
      bullet_posxy[i][0],
      bullet_posxy[i][1],
      162,
      162
    );
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
      alpha = 0;
      delta = 0.025;
    }
  }
}

function dialogue() {
  if (
    !fade_status &&
    document.getElementById("comic-container").style.display == "none"
  ) {
    if (
      words[words_index].slice(0, words[words_index].indexOf(":")) == "sander"
    ) {
      ctx.drawImage(
        sander_dia,
        myCanvas.width / 2 - sander_dia.width / 2,
        685,
        sander_dia.width,
        sander_dia.height
      );
    }
    if (
      words[words_index].slice(0, words[words_index].indexOf(":")) == "soldier"
    ) {
      ctx.drawImage(
        extra0_dia,
        myCanvas.width / 2 - extra0_dia.width / 2,
        685,
        extra0_dia.width,
        extra0_dia.height
      );
    }
    if (
      words[words_index].slice(0, words[words_index].indexOf(":")) == "hadao"
    ) {
      ctx.drawImage(
        extra1_dia,
        myCanvas.width / 2 - extra1_dia.width / 2,
        685,
        extra1_dia.width,
        extra1_dia.height
      );
    }
    if (
      words[words_index].slice(0, words[words_index].indexOf(":")) == "wichian"
    ) {
      ctx.drawImage(
        wichian_dia,
        myCanvas.width / 2 - wichian_dia.width / 2,
        685,
        wichian_dia.width,
        wichian_dia.height
      );
    }
    if (
      words[words_index].slice(0, words[words_index].indexOf(":")) == "axeon"
    ) {
      ctx.drawImage(
        axeon_dia,
        myCanvas.width / 2 - axeon_dia.width / 2,
        685,
        axeon_dia.width,
        axeon_dia.height
      );
    }
    if (
      words[words_index].slice(0, words[words_index].indexOf(":")) == "bunchun"
    ) {
      ctx.drawImage(
        bunchun_dia,
        myCanvas.width / 2 - bunchun_dia.width / 2,
        685,
        bunchun_dia.width,
        bunchun_dia.height
      );
    }
    if (
      words[words_index].slice(0, words[words_index].indexOf(":")) == "mcdo"
    ) {
      ctx.drawImage(
        mcdo_dia,
        myCanvas.width / 2 - mcdo_dia.width / 2 - 50,
        685,
        mcdo_dia.width,
        mcdo_dia.height
      );
    }
    if (count + 1 < words[words_index].length) {
      count++;
    }
    ctx.fillStyle = "white";
    ctx.font = "36px Bai Jamjuree";

    if (count == 1) {
      typesound.play();
    }
    if (!words[words_index].includes("<br>")) {
      chars1 = words[words_index]
        .slice(words[words_index].indexOf(":") + 1, words[words_index].length)
        .substring(0, count);
      ctx.fillText(chars1, 764, 925);
    } else {
      chars1 = words[words_index]
        .slice(
          words[words_index].indexOf(":") + 1,
          words[words_index].indexOf("<")
        )
        .substring(0, count);
      if (
        count >= words[words_index].indexOf("<") &&
        count <= words[words_index].length
      ) {
        chars2 = words[words_index].slice(
          words[words_index].indexOf(">") + 1,
          count + 1
        );
        ctx.fillText(chars2, 764, 925 + 30);
      }
      ctx.fillText(chars1, 764, 925 - 30);
    }

    if (
      count < words[words_index].length - 1 &&
      (keyPresses.Space || mouseclick)
    ) {
      count = words[words_index].length - 1;
    }
    if (
      count == words[words_index].length - 1 &&
      !keyPresses.Space &&
      !mouseclick
    ) {
      allowNextdialogue = true;
    }
    if (allowNextdialogue && (keyPresses.Space || mouseclick)) {
      nextdialogue = true;
    }
    if (nextdialogue && !keyPresses.Space && !mouseclick) {
      allowNextdialogue = false;
      nextdialogue = false;
      count = 0;
      if (words_index + 1 == words.length) {
        words_index = 0;
        dialogue_status = false;
      } else if (words_index + 1 < words.length) {
        words_index++;
      }
    }
  }
}

function setting() {
  document.getElementById("mySetting").style.display = "flex";
}

function setVolume() {
  const sounds = [
    typesound,
    itemsound,
    stonestepsound,
    sandstepsound,
    sandstep2sound,
    sandstep3sound,
    steelstepsound,
    chickenwalksound,
    gunsound,
    chargersound,
    mon4hitsound,
    mon4diedsound,
    sabersound,
    electric1sound,
    electric2sound,
    electric3sound,
    minibossendsound,
    deadsound,
    dead2sound,
    wormhitsound,
    wormwalksound,
    hitsound,
    hit2sound,
    spearsound,
    rcannonsound,
    cannonsound,
    cannonhitsound,
    warningsound,
    metalhitsound,
    finalbosswalksound,
  ];

  const musicSounds = [
    endingsound,
    sandsound,
    finalfightsound,
    finalfight2sound,
  ];

  const volumeValue = document.getElementById("sound").value;

  sounds.forEach((sound) => {
    sound.volume = volumeValue;
  });

  const musicVolumeValue = document.getElementById("music").value;

  musicSounds.forEach((sound) => {
    sound.volume = musicVolumeValue;
  });
}
