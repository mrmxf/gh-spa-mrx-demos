/** Copyright ©2023-2024   Metarex.Media   hello@metarex.media
 *  BSD 3 Clause License   https://opensource.org/license/bsd-3-clause/
 * ------------------------------------------------------------------------
 * the standard markdown display function
 */

import markdownit from 'markdown-it';

export const md = markdownit({ html: true, linkify: true, typographer: true });