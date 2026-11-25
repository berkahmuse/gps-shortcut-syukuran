# gps-shortcut-syukuran

[![make.fun](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/c/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/berkahmuse/gps-shortcut-syukuran/rank.svg)](https://make.fun/c/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/berkahmuse/gps-shortcut-syukuran/reward.svg)](https://make.fun/c/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

Entry for the [make.fun](https://make.fun) competition
[The GPS Swears It Was a Shortcut](https://make.fun/c/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9):
one line of plain text, the GPS's own excuse for sending the driver down the
wrong road.

## The line

> The map drew that road in 2027 and you’re driving in 2026 — I’m not lost, I’m early, and the cornfield was just a preview.

A fresh angle: neither a lake nor a bridge — the map is dated in the future,
so the GPS is not lost, just early. Smug, defensive, blaming the map, with a
cornfield as the specific detail.

## How it works

`main.ts` writes that single line to `/output/entry.txt`. Nothing else.
No network, no secrets, no dependencies — just Node's standard library.

```sh
node main.ts   # writes /output/entry.txt (122 characters, one line)
```

Self-check: two runs produce byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
