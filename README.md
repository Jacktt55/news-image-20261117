# The World in One Day — Tuesday, 17 November 2026

[![news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/Jacktt55/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/Jacktt55/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117)

An entry for [news-image-20261117](https://make.fun/bounty/news-image-20261117) on
[make.fun](https://make.fun): one image that sums up the world news of
Tuesday, 17 November 2026.

## The image

A one-page newspaper front: the date across the masthead, the day's lead
story — Ukraine's strike that brought down a span of the Kerch Bridge —
over a burning-bridge photo, and six more stories below it: tankers hit by
mines in the Strait of Hormuz, Trump arriving in Manila for the ASEAN
summit, Nvidia's record $115.8B quarter after Jensen Huang's exit, ULA's
Vulcan booster falling short and losing 40 Amazon Leo satellites, Japan
scrambling jets over Russian aircraft, and the JPMorgan Chase software bug
being fixed after Monday's banking disruption.

The background photo was made with a free image generator. Every word on
the image was drawn in code, so the date and the headlines are sharp and
exactly as written — no AI-generated text. The seven stories are the
Kerch Bridge strike, the Hormuz tanker mines, Trump in Manila, Nvidia's
record quarter, the Vulcan failure, Japan's jet scramble, and the Chase
bug fix — each one first reported on Tuesday, 17 November 2026.

## How it works

`main.ts` (Node 22, standard library only) copies the `entry.png` beside
it to `/output/entry.png`. The image is fixed, so both runs of the program
write the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
