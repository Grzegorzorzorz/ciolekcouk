import type { Metadata } from "next";

import Prose from "@/components/prose";

export const metadata: Metadata = {
  title: "Licence",
};

export default function Licence() {
  return (
    <Prose>
      <h1>Licence</h1>
      <p>
        This project is distributed under the MIT Licence (unless stated
        otherwise) the terms for which are as follows:
      </p>
      <p>Copyright (c) {new Date().getFullYear()} Grzegorz Ciołek</p>
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a
        copy of this software and associated documentation files (the
        "Software"), to deal in the Software without restriction, including
        without limitation the rights to use, copy, modify, merge, publish,
        distribute, sublicense, and/or sell copies of the Software, and to
        permit persons to whom the Software is furnished to do so, subject to
        the following conditions:
      </p>
      <p>
        The above copyright notice and this permission notice shall be included
        in all copies or substantial portions of the Software.
      </p>
      <p>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
        IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
        CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
        TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
        SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      </p>
      <h2>Third-party licences</h2>
      <p>
        Licences for third-party works used can be found{" "}
        <a href="/licence/third-party">here</a>.
      </p>
    </Prose>
  );
}
