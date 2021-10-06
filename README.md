# Conference Deadlines

Countdown timers to keep track of a bunch of CV/NLP/ML/RO conference deadlines available
at [https://a-nau.github.io/conference-deadlines](https://a-nau.github.io/conference-deadlines).

This is a [fork][2] with some minor changes:

- change from `yaml` to `csv` since it allows easier manipulation on local machine (filtering, sorting, ...)
- add direct link to conference website with Icons from [IcoMoon](https://icomoon.io/#icons-icomoon)
- add display of h-index (inspiration from [ad-deadlines.com][13])
- add display of full conference name on hover (inspiration from [ad-deadlines.com][13])
- add display of conference ranking

Potential future extension include

- export of conferences dates to calendar

## Contributing

Contributions are very welcome!

To add or update a deadline:

- Fork the repository
- Update `_data/conferences.csv`
- Make sure it has the `title`, `year`, `id`, `link`, `deadline`, `timezone`, `date`, `place`, `sub` attributes
    + See available timezone strings [here](https://momentjs.com/timezone/).
- Optionally add a `note` and `abstract_deadline` in case the conference has a separate mandatory abstract deadline
- Optionally add `hindex` (refers to h5-index
  from [here](https://scholar.google.com/citations?view_op=top_venues&vq=eng))
- Send a pull request

## Forks & other useful listings

- [geodeadlin.es][3] by @LukasMosser
- [neuro-deadlines][4] by @tbryn
- [ai-challenge-deadlines][5] by @dieg0as
- [CV-oriented ai-deadlines (with an emphasis on medical images)][8] by @duducheng
- [es-deadlines (Embedded Systems, Computer Architecture, and Cyber-physical Systems)][9] by @AlexVonB and @k0nze
- [2019-2020 International Conferences in AI, CV, DM, NLP and Robotics][10] by @JackieTseng
- [ccf-deadlines][11] by @ccfddl
- [netdeadlines.com][12] by @albertgranalcoz
- [ad-deadlines.com][13] by @daniel-bogdoll

## License

[AI Deadlines](https://github.com/abhshkdz/ai-deadlines): [MIT][1]

[IcoMoon Icons](https://icomoon.io/#icons-icomoon): [GPL](http://www.gnu.org/licenses/gpl.html) / [CC BY4.0](http://creativecommons.org/licenses/by/4.0/)

[1]: https://abhshkdz.mit-license.org/
[2]: http://aideadlin.es/
[3]: https://github.com/LukasMosser/geo-deadlines
[4]: https://github.com/tbryn/neuro-deadlines
[5]: https://github.com/dieg0as/ai-challenge-deadlines
[6]: http://www.conferenceranks.com/#
[8]: https://creedai.github.io/ai-deadlines/
[9]: https://ekut-es.github.io/es-deadlines/
[10]: https://jackietseng.github.io/conference_call_for_paper/conferences.html
[11]: https://ccfddl.github.io/
[12]: https://netdeadlines.com/
[13]: https://ad-deadlines.com/
