(function(e){function t(t){for(var n,i,r=t[0],l=t[1],h=t[2],c=0,d=[];c<r.length;c++)i=r[c],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);v&&v(t);while(d.length)d.shift()();return o.push.apply(o,h||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={instruction:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var h=0;h<r.length;h++)t(r[h]);var v=l;o.push([1,"chunk-vendors"]),a()})({1:function(e,t,a){e.exports=a("6ea8")},"108d":function(e,t,a){},"443e":function(e,t,a){"use strict";var n=a("60ad"),s=a.n(n);s.a},"60ad":function(e,t,a){},"6ea8":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e._m(0),a("nav",[a("div",{staticClass:"nav nav-pills nav-fill",attrs:{id:"nav-tab",role:"tablist"}},[a("a",{staticClass:"nav-item nav-link",class:{active:"Events"===e.active_tab},on:{click:function(t){e.active_tab="Events"}}},[e._v("Events")]),a("a",{staticClass:"nav-item nav-link",class:{active:"Question"===e.active_tab},on:{click:function(t){e.active_tab="Question"}}},[e._v("Questions")]),a("a",{staticClass:"nav-item nav-link",class:{active:"Answer"===e.active_tab},on:{click:function(t){e.active_tab="Answer"}}},[e._v("Answers")])])]),"Events"===e.active_tab?a("div",[a("i-event")],1):e._e(),"Question"===e.active_tab?a("div",[a("i-question")],1):e._e(),"Answer"===e.active_tab?a("div",[a("i-qa")],1):e._e()])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col"},[a("h1",{staticClass:"text-center"},[e._v("Instruction for Question-Answering on Temporal Relations")])])])}],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"instruction"}},[a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card"},[a("a",{staticClass:"card-header",attrs:{"data-toggle":"collapse",href:"#collapseEvent","aria-expanded":"true","aria-controls":"collapseEvent"}},[a("h4",[e._v(" What's an event? (click to collapse) ")])]),a("div",{staticClass:"collapse show",attrs:{id:"collapseEvent"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-text"},[a("strong",[e._v('This section is copied from our real task. If you have worked on that and are pretty familiar with the definition of events below, feel free to "collapse" this section.')]),a("hr"),a("strong",[e._v("An event is something that happened, is happening, or may happen.")]),e._v(" For instance, this sentence "),a("ul",[a("li",[a("em",[e._v('"He ate his breakfast and then went to the store."')])])]),e._v(" has two events: (i) he ate breakfast, and (ii) he went to the store. ")]),a("div",{staticClass:"card-text"},[a("strong",[e._v("Negative events are still valid events.")]),e._v(" For instance, in this sentence, "),a("ul",[a("li",[a("em",[e._v("\"He didn't eat his breakfast and he didn't go to the store, either.\"")])])]),a("em",[e._v('"He didn\'t eat breakfast"')]),e._v(" and "),a("em",[e._v('"he didn\'t go to the store"')]),e._v(" are both correct events. ")]),a("div",{staticClass:"card-text"},[a("strong",[e._v("An event can have a confidence level.")]),e._v(" For instance, in "),a("ul",[a("li",[a("em",[e._v('"He might have eaten his breakfast and gone to the store."')])]),a("li",[a("em",[e._v('"He probably/possibly/barely/... had his breakfast and went to the store."')])])]),a("em",[e._v('"Have breakfast"')]),e._v(" and "),a("em",[e._v('"go to the store"')]),e._v(" are still valid events in our definition, although the speaker is not 100% sure about it. ")]),a("p",{staticClass:"card-text"},[a("strong",[e._v('In summary, an event can be factual or hypothetical, positive or negative, certain or uncertain. All events above are based on verbs, but an event can also be based on a noun or a copula verb (is, was, been, etc.). Check these examples below to get a more accurate understanding of what we mean by "events."')])]),a("table",[a("tr",[a("th",[e._v("Text")]),a("th",[e._v("Events")]),a("th",[e._v("Explanation")])]),a("tr",[a("td",[e._v("He is happy.")]),a("td",[e._v("One event: he is happy.")]),a("td",[e._v("This is straightforward.")])]),a("tr",[a("td",[e._v("He is on the east coast.")]),a("td",[e._v("One event: he is on the east coast.")]),a("td",[e._v("This is straightforward.")])]),a("tr",[a("td",[e._v("He was caught in the snow storm.")]),a("td",[e._v("Two events: (i) he was caught in something, and (ii) snow storm.")]),a("td",[a("em",[e._v('"Snow storm"')]),e._v(" is a noun event. "),a("em",[e._v('"He was caught in something"')]),e._v(" is a separate event because it provides additional information"),e._v(".")])]),a("tr",[a("td",[e._v("He was caught in the goo.")]),a("td",[e._v("One event: he was caught in something.")]),a("td",[e._v("Not every noun can be an event. Here "),a("em",[e._v('"goo"')]),e._v(" is an object and you cannot say "),a("em",[e._v('"a goo happened"')]),e._v(".")])]),a("tr",[a("td",[e._v("He wanted to finish the task.")]),a("td",[e._v("Two events: (i) he wanted to do something, and (ii) finish the task.")]),a("td",[a("span",{staticStyle:{color:"DodgerBlue"}},[e._v("This is an important example.")]),e._v(" Although we don't know whether the task is indeed finished or not, "),a("em",[e._v('"finish the task"')]),e._v(" is still a valid event in our definition "),a("span",{staticStyle:{color:"DodgerBlue"}},[e._v("(by the way, it's an intention event)")]),e._v(".")])]),a("tr",[a("td",[e._v("If he works hard, then he will finish the task.")]),a("td",[e._v("Two events: (i) he works hard, and (ii) he will finish the task.")]),a("td",[e._v("Here the second event happens only if the first one is true, but in our definition, they are both events "),a("span",{staticStyle:{color:"DodgerBlue"}},[e._v("(by the way, they're hypothetical events)")]),e._v(".")])])])])])])])]),a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card"},[a("a",{staticClass:"card-header",attrs:{"data-toggle":"collapse",href:"#collapseLabelEvent","aria-expanded":"true","aria-controls":"collapseLabelEvent"}},[a("h4",[e._v(" How to label events (click to collapse) ")])]),a("div",{staticClass:"collapse show",attrs:{id:"collapseLabelEvent"}},[a("div",{staticClass:"card-body"},[a("strong",[e._v('Again, this section is copied from our real task. If you have worked on that, feel free to "collapse" this section.')]),a("hr"),a("p",{staticClass:"card-text"},[e._v("When annotating these events, we ask you to double-click on "),a("strong",[e._v("a single word")]),e._v(' from the original text to represent each event (words connected by "-" is considered as single here). '),a("strong",[a("span",{staticStyle:{color:"DodgerBlue"}},[e._v('The single word must be a verb (including "be" verbs, aka copula) or a noun')]),e._v(" and "),a("span",{staticStyle:{color:"Tomato"}},[e._v("must NOT be a pronoun or an adjective")]),e._v(".")]),e._v(' For noun events such as "snow storm", you should keep the last word in the phrase (i.e., "storm").')]),a("table",[a("tr",[a("th",[e._v("Event")]),a("th",[e._v("Single Words to Label")]),a("th",[e._v("Explanation")])]),a("tr",[a("td",[e._v("he "),a("strong",[e._v("is")]),e._v(" happy")]),a("td",[e._v("is")]),a("td",[e._v("Here "),a("em",[e._v('"is"')]),e._v(" is the copula to describe his status. Note you shouldn't label "),a("em",[e._v('"happy"')]),e._v(" because it's neither a verb nor a noun.")])]),a("tr",[a("td",[e._v("he "),a("strong",[e._v("is")]),e._v(" on the east coast")]),a("td",[e._v("is")]),a("td",[e._v("Here "),a("em",[e._v('"is"')]),e._v(" is the copula to describe his location.")])]),a("tr",[a("td",[e._v("he was "),a("strong",[e._v("caught")]),e._v(" in (something)")]),a("td",[e._v("caught")]),a("td",[e._v("Here "),a("em",[e._v('"was"')]),e._v(" is simply to construct the passive voice of "),a("em",[e._v('"caught"')]),e._v(", so you should select "),a("em",[e._v('"caught"')]),e._v(".")])]),a("tr",[a("td",[e._v("snow "),a("strong",[e._v("storm")])]),a("td",[e._v("storm")]),a("td",[e._v("Remember to select the last word in a noun event phrase.")])]),a("tr",[a("td",[e._v("he didn't "),a("strong",[e._v("eat")]),e._v(" his breakfast")]),a("td",[e._v("eat")]),a("td",[e._v("You should select "),a("em",[e._v('"eat"')]),e._v(" although the event is negated. Note "),a("em",[e._v('"breakfast"')]),e._v(" is a thing to be eaten instead of an event. Please compare with the following example to see the subtlety here.")])]),a("tr",[a("td",[e._v("(something happened) during his "),a("strong",[e._v("breakfast")])]),a("td",[e._v("breakfast")]),a("td",[e._v("Here "),a("em",[e._v('"breakfast"')]),e._v(" is an event instead of a thing to be eaten.")])]),a("tr",[a("td",[e._v("he probably "),a("strong",[e._v("went")]),e._v(" to the store")]),a("td",[e._v("went")]),a("td",[e._v("You should select "),a("em",[e._v('"went"')]),e._v(" although the event is not certain.")])])]),a("p",{staticClass:"card-text"},[e._v("Please see these real examples below.")]),a("ul",[a("li",[a("em",[e._v('"The second you '),a("strong",[e._v("log")]),e._v(" anything into your phone, it "),a("strong",[e._v("is")]),e._v(' also accessible from a PC Web browser via Google Drive."')])]),a("li",[a("em",[e._v('"The death toll '),a("strong",[e._v("climbed")]),e._v(" up to 99 soon after the "),a("strong",[e._v("explosion")]),e._v('."')])]),a("li",[a("em",[e._v('"Nearing London, Oliver '),a("strong",[e._v("encounters")]),e._v(" Jack Dawkins, a pickpocket more commonly "),a("strong",[e._v("known")]),e._v(" by the nickname the 'Artful Dodger', and his sidekick, a boy of a humorous nature "),a("strong",[e._v("named")]),e._v(" Charley Bates, but Oliver's innocent and trusting nature "),a("strong",[e._v("fails")]),e._v(" to "),a("strong",[e._v("see")]),e._v(" any dishonesty in their actions.")])]),a("li",[a("em",[e._v('"The flu '),a("strong",[e._v("season")]),e._v(" is "),a("strong",[e._v("winding")]),e._v(" down, and it has "),a("strong",[e._v("killed")]),e._v(" 105 children so far - about the average "),a("strong",[e._v("toll")]),e._v('."')]),e._v(" "),a("span",{staticStyle:{color:"DodgerBlue"}},[e._v('Here remember to select "season" instead of "flu", because the event is "flu season" and "season" is the last word.')])]),a("li",[a("em",[e._v('"Malaysian share prices '),a("strong",[e._v("dipped")]),e._v(" 1.1 percent by midday Tuesday, with the market barometer "),a("strong",[e._v("falling")]),e._v(" below the 1,200 support level for the first time in three months following credit "),a("strong",[e._v("curbs")]),e._v(" and the Dow's "),a("strong",[e._v("fall")]),e._v('."')])])])])])])])])])}],l=(a("b680"),{name:"Instruction",props:{},filters:{currency:function(e){return e.toFixed(2)}}}),h=l,v=(a("b7d2"),a("2877")),c=Object(v["a"])(h,i,r,!1,null,null,null),d=c.exports,u=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"instruction-questions"}},[a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card"},[a("a",{staticClass:"card-header",attrs:{"data-toggle":"collapse",href:"#collapseInstructionsQuestions","aria-expanded":"true","aria-controls":"collapseInstructionsQuestions"}},[a("h4",[e._v(" What is a question on temporal relation? (click to collapse) ")])]),a("div",{staticClass:"collapse show",attrs:{id:"collapseInstructionsQuestions"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-text"},[a("strong",[e._v("This section was NOT explained in detail in the real task, so all please read it carefully.")]),a("hr"),a("strong",[e._v("A temporal relation describes the relation between two things with respect to time, e.g., something A {happens/starts/terminates/...} {immediately/shortly/usually/...} {before/after/during/...} something B. We can call this relation (A, type of relation, B) for convenience. See examples below.")]),a("br"),a("br"),a("table",[a("tr",[a("th",[e._v("Text")]),a("th",[e._v("A")]),a("th",[e._v("Type of Relation")]),a("th",[e._v("B")]),a("th",[e._v("(A, type of relation, B)")])]),a("tr",[a("td",[e._v("I left the room after seeing him")]),a("td",[e._v("left")]),a("td",[e._v("after")]),a("td",[e._v("seeing")]),a("td",[e._v("(left, after, seeing)")])]),a("tr",[a("td",[e._v("His leg was injured during a football game.")]),a("td",[e._v("injured")]),a("td",[e._v("during")]),a("td",[e._v("game")]),a("td",[e._v("(injured, during, game)")])]),a("tr",[a("td",[e._v("The speech will start if every one is seated.")]),a("td",[e._v("speech")]),a("td",[e._v("start after")]),a("td",[e._v("seated")]),a("td",[e._v("(speech, start after, seated)")])]),a("tr",[a("td",[e._v("I have been working here since 2011.")]),a("td",[e._v("working")]),a("td",[e._v("since")]),a("td",[e._v("2011")]),a("td",[e._v("(working, since, 2011)")])])]),a("br"),a("strong",[a("span",{staticStyle:{color:"Tomato"}},[e._v('Then what do we mean by a "question about temporal relations"?')]),e._v(' It means a question asking for A or B. That is (A, type of relation, ?) or (?, type of relation, B). One exception is that the answer must be an event, so if the answer to your question is "2011", then your question is not what we want. Following the examples above, please see these:')]),a("table",[a("tr",[a("th",[e._v("Relation: (A, type of relation, B)")]),a("th",[e._v("Question 1: (?, type of relation, B)")]),a("th",[e._v("Question 2: (A, type of relation, ?)")])]),a("tr",[a("td",[e._v("(left, after, seeing)")]),a("td",[e._v("Q: What happened after I saw him? "),a("br"),e._v("A: left")]),a("td",[e._v("Q: What happened before I left the room? "),a("br"),e._v("A: seeing")])]),a("tr",[a("td",[e._v("(injured, during, game)")]),a("td",[e._v("Q: What happened during the game? "),a("br"),e._v("A: injured")]),a("td",[e._v("Q: What was happening when his leg was injured? "),a("br"),e._v("A: game")])]),a("tr",[a("td",[e._v("(speech, start after, seated)")]),a("td",[e._v("Q: What will start after everyone is seated? "),a("br"),e._v("A: speech")]),a("td",[e._v("Q: What should happen before the speech starts? "),a("br"),e._v("A: seated")])]),a("tr",[a("td",[e._v("(working, since, 2011)")]),a("td",[e._v("Q: What has been happening since 2011? "),a("br"),e._v(" A: working")]),a("td",[e._v("N/A")])])]),a("br"),a("strong",[a("u",[e._v("In short, we want gramatically correct questions that are about temporal relations and whose answers are events (we mark correct questions in blue and wrong questions in red for your convenience):")])]),a("strong",[a("ul",[a("li",[e._v("Questions with gramatical errors are incorrect. Please mind the grammar (including tense). For instance, "),a("span",{staticStyle:{color:"Tomato"}},[e._v('"What happened in the future?" and "What will happen in the past?"')]),e._v(" are incorrect.")]),a("li",[e._v("The answer to your question must be an event. For instance, "),a("span",{staticStyle:{color:"Tomato"}},[e._v('"When did I start working here?" and "Since when have I been working here?"')]),e._v(" are both incorrect. This rule is very handy and can be applied to all the following mistakes:")]),a("ul",[a("li",[e._v("(A, ?, B) is NOT what we want. For instance, "),a("span",{staticStyle:{color:"Tomato"}},[e._v('"What is the relation between left and seeing?"')]),e._v(" isn't correct.")]),a("li",[e._v("Some other questions are not querying a temporal relation at all. For instance, "),a("span",{staticStyle:{color:"Tomato"}},[e._v('"Who left the room?"')]),e._v(" is obviously wrong. Tricky examples are "),a("span",{staticStyle:{color:"Tomato"}},[e._v('"Who left the room after seeing him?", "How was he injured during a game?", and "Where have I been working since 2011?"')]),e._v(", which have temporal relations in them, but what's being queried isn't an event, so they're wrong too. ")]),a("li",[e._v("We don't want yes-no questions (e.g., "),a("span",{staticStyle:{color:"Tomato"}},[e._v('"Did I leave the room?"')]),e._v(").")])]),a("li",[e._v("There're some special cases where your answer is an event, but still NOT what we want:")]),a("ul",[a("li",[e._v("We don't want alternative questions. For instance, "),a("span",{staticStyle:{color:"Tomato"}},[e._v('"Did I leave the room or stay in the room?"')]),e._v('. Although the answer is an event (i.e., "leave"), the question is still incorrect.')]),a("li",[e._v('We don\'t want questions asking for "causes". For instance, '),a("span",{staticStyle:{color:"Tomato"}},[e._v('"What caused his injury?" or "What led to his injury?"')]),e._v('. Although the answer is an event (i.e., "game"), the question is still incorrect (they\'re called "causal questions" instead of "temporal relation questions").')])]),a("li",[e._v("Further restrictions to the scope of a correct question is allowed. For instance, instead of asking "),a("span",{staticStyle:{color:"DodgerBlue"}},[e._v('"What happened during the game?"')]),e._v(", one can also ask "),a("span",{staticStyle:{color:"DodgerBlue"}},[e._v('"What happened to his leg during the game?"')]),e._v(". Similarly, one can ask "),a("span",{staticStyle:{color:"DodgerBlue"}},[e._v('"What did I do after seeing him?"')]),e._v(", or even "),a("span",{staticStyle:{color:"DodgerBlue"}},[e._v('"What did he do after I saw him?"')]),e._v(", which is allowed although the last question doesn't have an answer in the original sentence.")]),a("li",[e._v("One can also add modifiers to a correct question. For instance, the following are all correct: "),a("span",{staticStyle:{color:"DodgerBlue"}},[e._v('"What *usually* happens after ...?", "What did *not* happen after ...?", "What *might* happen after ...?", "What *should have* happened but did not happen after ...?", and "*According to the spokesman*, what had happened before ...?"')])]),a("li",[e._v('We don\'t have to use the word "happen". '),a("span",{staticStyle:{color:"DodgerBlue"}},[e._v('"What started after ...?", "What event began after ...?", "What event finished after ...?", "What event was ongoing during ...?" etc.')]),e._v(" are all correct.")])])])])])])])])])])}],p={name:"InstructionsOnQuestions",props:{},filters:{currency:function(e){return e.toFixed(2)}}},g=p,f=(a("a428"),Object(v["a"])(g,u,_,!1,null,null,null)),m=f.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"instruction-qa"}},[a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col"},[a("div",{staticClass:"card"},[a("a",{staticClass:"card-header",attrs:{"data-toggle":"collapse",href:"#collapseInstructionsQA","aria-expanded":"true","aria-controls":"collapseInstructionsQA"}},[a("h4",[e._v(" How to judge an answer (click to collapse) ")])]),a("div",{staticClass:"collapse show",attrs:{id:"collapseInstructionsQA"}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-text"},[a("strong",[e._v("This section was NOT explained in detail in the real task, so all please read it carefully.")]),a("hr"),a("strong",[e._v("Now, you know how to label an event as a single word, and you also know what kind of questions we want. Then the next step in our *real* task is to answer these questions using those events. Here you don't have to answer them yourselves. We will show you a passage, a question, and a potential answer, and all you need to do is to judge if the answer is correct or not. There may be multiple answers to the question, but you only need to judge the one given to you.")]),a("br"),a("br"),a("strong",[e._v("The rule of thumb is to remember that this is a question-answering task. Although the rules that we are going to describe below are very natural in English, please still read it carefully as you may not realize all of them.")]),a("ul",[a("li",[a("span",{staticStyle:{color:"DodgerBlue"}},[e._v("Put yourself at the time point when the sentence was written/spoken.")]),e._v(' If you see a sentence saying "New York is welcoming the new year", then New York is welcoming *now*. If a question is "What is happening now?", then "welcoming" is a correct answer.')]),a("li",[a("span",{staticStyle:{color:"DodgerBlue"}},[e._v("Only consider the information provided in the passage.")]),e._v(' Do not imagine things. If a sentence says "The sun rose in the west yesterday", then take it true even if you don\'t believe it personally.')]),a("li",[a("span",{staticStyle:{color:"DodgerBlue"}},[e._v('Every question is implicitly from the stance of speaker of the passage you read, unless the question explicitly says "according to ..."')]),e._v(" Stay alarmed when the speaker him/herself quotes someone else. When it's needed, you have to judge if the speaker agrees with what he/she quotes. If there's no obvious evidence of disagreement, you need to assume agreement.")]),a("li",[a("span",{staticStyle:{color:"DodgerBlue"}},[e._v("Negative events.")]),e._v(' If a sentence says "I didn\'t leave the room after seeing him", then "What didn\'t happen after I saw him?"--"leave"; however, if the question is "What happened after I saw him?", then "leave" is NOT a correct answer anymore.')]),a("li",[a("span",{staticStyle:{color:"DodgerBlue"}},[e._v("Uncertain events.")]),e._v(' If one says "he might have left the room", then "What might have happened?"--"left"; if the question is "What has happened?", then "left" is NOT a correct answer anymore.')]),a("li",[a("span",{staticStyle:{color:"DodgerBlue"}},[e._v("Future events.")]),e._v(' Nothing in the future can be guaranteed, so when answering questions about the future, we have to see what the speaker thinks. "Will" means according to the speaker, there\'s no uncertainty; If one says "The train will leave in 10 minutes", then we have to take it and "leave" is a correct answer to "What will happen?". Be careful when the speaker expresses uncertainty, for which you need to use the rule for uncertainty events above.')]),a("li",[a("span",{staticStyle:{color:"DodgerBlue"}},[e._v("Repetitive events.")]),e._v(' If one sentence says "I jog every day", then "jog" is a correct answer to all the following questions: "What has happened so far?", "What will happen in the future?", and "What happens every day?". Repetitive events means those that can happen multiple times, either regularly or sporadically, and "jog" is an example.')]),a("li",[a("span",{staticStyle:{color:"DodgerBlue"}},[e._v('A special note of "what (has) happened".')]),e._v(' If a sentence says "The snow storm is causing interruptions", then "storm" is NOT a correct answer to "What has happened?". This is because "what has happened" implies the answer event has finished, while the snow storm hasn\'t finished. The same requirement also applies to questions like "what happened before something". In addition, "what happened after something A?" means this event started after A and finished before now. The requirement of having finished doesn\'t apply to questions like "what will happen".')])])])])])])])])])}],y={name:"InstructionsOnQA",props:{},filters:{currency:function(e){return e.toFixed(2)}}},k=y,T=(a("443e"),Object(v["a"])(k,w,b,!1,null,null,null)),W=T.exports,q={name:"Instruction",components:{"i-event":d,"i-question":m,"i-qa":W},data:function(){return{active_tab:"Events"}}},x=q,C=(a("756b"),Object(v["a"])(x,s,o,!1,null,null,null)),I=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(I)}}).$mount("#app")},"756b":function(e,t,a){"use strict";var n=a("108d"),s=a.n(n);s.a},"82d0":function(e,t,a){},a428:function(e,t,a){"use strict";var n=a("c049"),s=a.n(n);s.a},b7d2:function(e,t,a){"use strict";var n=a("82d0"),s=a.n(n);s.a},c049:function(e,t,a){}});
//# sourceMappingURL=instruction.72605b72.js.map