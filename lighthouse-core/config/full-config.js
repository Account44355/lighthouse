/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

module.exports = {
  extends: 'lighthouse:default',
  passes: [
    {
      passName: 'extraPass',
      gatherers: [
        'styles',
        'css-usage',
        'js-usage',
      ],
    },
  ],
  audits: [
    'byte-efficiency/unminified-css',
    'byte-efficiency/unused-css-rules',
    'byte-efficiency/unused-javascript',
    'dobetterweb/no-old-flexbox',
  ],
  categories: {
    'performance': {
      audits: [
        {id: 'unminified-css', weight: 0, group: 'perf-hint'},
        {id: 'unused-css-rules', weight: 0, group: 'perf-hint'},
        {id: 'unused-javascript', weight: 0, group: 'perf-hint'},
      ],
    },
    'best-practices': {
      audits: [
        {id: 'no-old-flexbox', weight: 1},
      ],
    },
  },
};
