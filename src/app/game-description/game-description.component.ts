import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.scss']
})
export class GameDescriptionComponent implements OnInit, OnChanges {
  cardAction = [
    {title: 'Waterfall', description: 'Everyone has start drinking at the same time. As soon as player 1 stops drinking, player'},
    {title: 'You', description: 'You decide who drinks'},
    {title: 'Me', description: 'Congrats! Drink a shot'},
    {title: 'Category', description: 'Come up with a category(e.g. Colors). Each player must enumerate one item from the category.'},
    {title: 'Bust a jive', description: 'Player 1 makes a dace move. Player 2 repeats the dance move and adds a second one.'},
    {title: 'Chicks', description: 'All girls drink.'},
    {title: 'Heaven', description: 'Put your hands up! The last player drinks!'},
    {title: 'Mate', description: 'Pick a Mate. Your mate must always drink when you drink and the other way around'},
    {title: 'Thumbmaster', description: ''},
    {title: 'Men', description: 'All men drink.'},
    {title: 'Quizmaster', description: ''},
    {title: 'Never jave e ever...', description: 'Say something you never did. Everyone who did it has to drink.'},
    {title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.'}
  ];
  
title = '';
description = '';
@Input() card: string;



  constructor(){}

  ngOnInit(): void {

  }

ngOnChanges(): void {
  if (this.card){
    console.log('Card current:', this.card);
    let cardNumber = +this.card.split('_')[1];
    this.title = this.cardAction[cardNumber - 1].title;
    this.description = this.cardAction[cardNumber - 1].description;
  }
}

}
