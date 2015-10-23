/**
 * This file is part of "MPS Setagaya Pacman."
 *
 * MPS Setagaya Pacman is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * MPS Setagaya Pacman is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <http://www.gnu.org/licenses/>.
 *
 * (c) Junya Kaneko <jyuneko@hotmail.com>
 */

/**
 * Created by Junya Kaneko on 10/23/15.
 * Authors: Junya Kaneko
 */

// パックマンのコンストラクタを定義。
// パックマンは、位置、速度、移動方向、口の開き具合、口パクの速度、を属性として持つ。
var Pacman = function (cx, cy, speed, theta) {
    this.position = [cx, cy];
    this.speed = speed;
    this.movingDirection = [0, 0];
    this.theta = theta;
    this.dTheta = 3;
};


// パックマンのメソッドを定義。
// 今のところ、メソッドはコンストラクタの持つ prototype オブジェクトのメソッドとして
// 定義すると覚える。
Pacman.prototype = {
    getCx: function () {
        return this.position[0];
    },

    getCy: function () {
        return this.position[1];
    },

    getPosition: function (i) {
        return this.position[i];
    },

    getSpeed: function () {
        return this.speed;
    },

    getTheta: function () {
        return this.theta;
    },

    go_left: function () {
        this.movingDirection = [-1 * this.getSpeed(), 0];
    },

    go_right: function () {
        this.movingDirection = [this.getSpeed(), 0];
    },

    go_up: function () {
        this.movingDirection = [0, -1 * this.getSpeed()];
    },

    go_down: function () {
        this.movingDirection = [0, this.getSpeed()];
    },

    move: function () {
        this.chew();
        for (var i = 0; i < 2; i++) {
            this.position[i] += this.movingDirection[i];
        }
    },

    chew: function () {
        if (this.theta >= 30 || this.theta <= 0) {
            this.dTheta *= -1;
        }
        this.theta += this.dTheta;
        return this.theta;
    },

    draw: function (ctx) {
        ctx.strokeStyle = "#FF0000";
        ctx.fillStyle = "#FF0000";
        ctx.beginPath();
        ctx.arc(this.getCx(), this.getCy(), 50, this.getTheta() * Math.PI / 180, (360 - this.getTheta()) * Math.PI / 180);
        ctx.lineTo(this.getCx(), this.getCy());
        ctx.lineTo(this.getCx() + 50 * Math.cos(this.getTheta() * Math.PI / 180), this.position[1] + 50 * Math.sin(this.getTheta() * Math.PI / 180));
        ctx.fill();
    }
};