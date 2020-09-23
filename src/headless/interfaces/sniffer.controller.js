export class SnifferController {
  constructor(snifferReleasesUsecase) {
    this._snifferReleasesUsecase = snifferReleasesUsecase;
  }

  async handle() {
    this._snifferReleasesUsecase.sniffer();
  }
}
