import { musicBase } from "./musicBase.js";
import { playerLogic } from "./playerLogic.js";

export const listLogic = {
    list: document.querySelector(".list"),

    getList: function (arr) {
        for (let i = 0; i < arr.length; i++) {
            const listItem = document.createElement("DIV");
            listItem.classList.add("list-item");
            listItem.innerHTML = `<p class="list-item-title">${arr[i].title}</p>
                                    <p class="list-item-author">${arr[i].author}</p>`;
            this.list.append(listItem);
            listItem.addEventListener("click", () => {
                playerLogic.currentSong = i;
                playerLogic.musicInit(arr[i]);
                // if (!playerLogic.isPlayed) {
                playerLogic.musicPlay();
                console.log(playerLogic.currentSong)
                // }
                // else playerLogic.musicPause();
            })
        }
    }
}