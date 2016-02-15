import Quill from './core/quill';
import Parchment from 'parchment';

import { AlignClass } from './formats/align';
import { BackgroundClass } from './formats/background';
import BoldFormat from './formats/bold';
import CodeFormat, { CodeInline } from './formats/code';
import { ColorClass } from './formats/color';
import { DirectionClass } from './formats/direction';
import { FontClass } from './formats/font';
import HeaderFormat from './formats/header';
import { IndentClass } from './formats/indent';
import ImageFormat from './formats/image';
import ItalicFormat from './formats/italic';
import LinkFormat from './formats/link';
import ListFormat, { ListItem } from './formats/list';
import ScriptFormat from './formats/script';
import { SizeClass } from './formats/size';
import StrikeFormat from './formats/strike';
import UnderlineFormat from './formats/underline';

import BlockBlot from './blots/block';
import BreakBlot from './blots/break';
import CursorBlot from './blots/cursor';
import InlineBlot from './blots/inline';
import ScrollBlot from './blots/scroll';

import ClipboardModule from './modules/clipboard';
// import ImageModule, { ImageBlot } from './modules/image';
import KeyboardModule from './modules/keyboard';
// import LinkModule, { LinkBlot } from './modules/link';
import ToolbarModule from './modules/toolbar';
import UndoManagerModule from './modules/undo-manager';

import SnowTheme from './themes/snow';


Quill.register(AlignClass);
Quill.register(BackgroundClass);
Quill.register(BoldFormat);
Quill.register(CodeInline);
Quill.register(CodeFormat);
Quill.register(ColorClass);
Quill.register(DirectionClass);
Quill.register(FontClass);
Quill.register(HeaderFormat);
Quill.register(ImageFormat);
Quill.register(IndentClass);
Quill.register(ItalicFormat);
Quill.register(LinkFormat);
Quill.register(ListFormat);
Quill.register(ScriptFormat);
Quill.register(SizeClass);
Quill.register(StrikeFormat);
Quill.register(UnderlineFormat);

Quill.register(BlockBlot);
Quill.register(ListItem);
Quill.register(BreakBlot);
Quill.register(CursorBlot);
Quill.register(InlineBlot);
Quill.register(ScrollBlot);
Quill.register(Parchment.Text);

Quill.register('clipboard', ClipboardModule);
// Quill.register('image', ImageModule);
Quill.register('keyboard', KeyboardModule);
// Quill.register('link', LinkModule);
Quill.register('toolbar', ToolbarModule);
Quill.register('undo-manager', UndoManagerModule);


Quill.register('snow', SnowTheme);


module.exports = Quill;