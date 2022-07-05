var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { buildPage } from "./buildPage.js";
const pageContent = document.getElementById('root');
const pageTitle = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch('../src/components/title.html')
        .then(response => {
        return response.text();
    });
    return String(res);
});
const app = (() => __awaiter(void 0, void 0, void 0, function* () {
    pageContent.innerHTML = (yield pageTitle()).valueOf();
    buildPage();
}))();
