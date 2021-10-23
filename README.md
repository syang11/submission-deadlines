# Conference Deadlines

Countdown timers to keep track of a bunch of CV/NLP/ML/RO conference deadlines available
at [https://a-nau.github.io/conference-deadlines](https://a-nau.github.io/conference-deadlines).

This is a [fork][2] with some minor changes:

- change from `yaml` to `csv` since it allows easier manipulation on local machine (filtering, sorting, ...)
- add direct link to conference website with Icons from [IcoMoon](https://icomoon.io/#icons-icomoon)
- add display of h-index (inspiration from [ad-deadlines.com][13])
- add display of full conference name on hover (inspiration from [ad-deadlines.com][13])
- add display of conference ranking
- some more design changes

Potential future extension include

- export of conferences dates to calendar

## Contributing

Contributions are very welcome!

To add or update a deadline:

- Fork the repository
- Update [`_data/conferences.csv`](_data/conferences.csv)
- Make sure it has the `title`, `year`, `id`, `link`, `deadline`, `timezone`, `date`, `place`, `sub` attributes
  - See available timezone strings [here](https://momentjs.com/timezone/).
- Optionally add a `note` and `abstract_deadline` in case the conference has a separate mandatory abstract deadline
- Optionally add `hindex` (refers to h5-index
  from [here](https://scholar.google.com/citations?view_op=top_venues&vq=eng))
- Optionally add `ranking` from [here](http://www.conferenceranks.com/)
- Send a pull request

## Usage

### Host own website

- fork the repo
- adjust [`_config.yaml`](_config.yaml) with your URLs
  ```yaml
  domain: "https://<user-name>.github.io/"
  baseurl: "/<repo-name>"
  ```
- remove [`CNAME`](CNAME)
- adjust the [`_data/conferences.csv`](_data/conferences.csv)
- if you want a domain different from Github, check [this](https://dafero.wordpress.com/2020/02/19/how-to-configure-github-pages-with-a-custom-ionos-old-11-domain/)

### Locally

To test/develop the site locally with Docker:

- Build

  ```shell
  docker build -t jekyll-cd .
  ```

- Run
  - Linux
    ```shell
    docker run --mount type=bind,source=${PWD},target=/app -p 4000:4000 -it --rm --name conference-deadlines jekyll-cd
    ```
  - Windows
    ```shell
    docker run --mount type=bind,source=%cd%,target=/app -p 4000:4000 -it --rm --name conference-deadlines jekyll-cd
    ```

## License

[AI Deadlines](https://github.com/abhshkdz/ai-deadlines): [MIT][1]

[IcoMoon Icons](https://icomoon.io/#icons-icomoon): [GPL](http://www.gnu.org/licenses/gpl.html) / [CC BY4.0](http://creativecommons.org/licenses/by/4.0/)

[1]: https://abhshkdz.mit-license.org/
[2]: http://aideadlin.es/
[13]: https://ad-deadlines.com/
