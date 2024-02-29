import JSZip from 'jszip';
import Konva from 'konva';

const types = {
    "application/andrew-inset": ["ez"], "application/appinstaller": ["appinstaller"], "application/applixware": ["aw"], "application/appx": ["appx"], "application/appxbundle": ["appxbundle"], "application/atom+xml": ["atom"], "application/atomcat+xml": ["atomcat"], "application/atomdeleted+xml": ["atomdeleted"], "application/atomsvc+xml": ["atomsvc"], "application/atsc-dwd+xml": ["dwd"], "application/atsc-held+xml": ["held"], "application/atsc-rsat+xml": ["rsat"], "application/automationml-aml+xml": ["aml"], "application/automationml-amlx+zip": ["amlx"], "application/bdoc": ["bdoc"], "application/calendar+xml": ["xcs"], "application/ccxml+xml": ["ccxml"], "application/cdfx+xml": ["cdfx"], "application/cdmi-capability": ["cdmia"], "application/cdmi-container": ["cdmic"], "application/cdmi-domain": ["cdmid"], "application/cdmi-object": ["cdmio"], "application/cdmi-queue": ["cdmiq"], "application/cpl+xml": ["cpl"], "application/cu-seeme": ["cu"], "application/cwl": ["cwl"], "application/dash+xml": ["mpd"], "application/dash-patch+xml": ["mpp"], "application/davmount+xml": ["davmount"], "application/docbook+xml": ["dbk"], "application/dssc+der": ["dssc"], "application/dssc+xml": ["xdssc"], "application/ecmascript": ["ecma"], "application/emma+xml": ["emma"], "application/emotionml+xml": ["emotionml"], "application/epub+zip": ["epub"], "application/exi": ["exi"], "application/express": ["exp"], "application/fdf": ["fdf"], "application/fdt+xml": ["fdt"], "application/font-tdpfr": ["pfr"], "application/geo+json": ["geojson"], "application/gml+xml": ["gml"], "application/gpx+xml": ["gpx"], "application/gxf": ["gxf"], "application/gzip": ["gz"], "application/hjson": ["hjson"], "application/hyperstudio": ["stk"], "application/inkml+xml": ["ink", "inkml"], "application/ipfix": ["ipfix"], "application/its+xml": ["its"], "application/java-archive": ["jar", "war", "ear"], "application/java-serialized-object": ["ser"], "application/java-vm": ["class"], "application/javascript": ["*js"], "application/json": ["json", "map"], "application/json5": ["json5"], "application/jsonml+json": ["jsonml"], "application/ld+json": ["jsonld"], "application/lgr+xml": ["lgr"], "application/lost+xml": ["lostxml"], "application/mac-binhex40": ["hqx"], "application/mac-compactpro": ["cpt"], "application/mads+xml": ["mads"], "application/manifest+json": ["webmanifest"], "application/marc": ["mrc"], "application/marcxml+xml": ["mrcx"], "application/mathematica": ["ma", "nb", "mb"], "application/mathml+xml": ["mathml"], "application/mbox": ["mbox"], "application/media-policy-dataset+xml": ["mpf"], "application/mediaservercontrol+xml": ["mscml"], "application/metalink+xml": ["metalink"], "application/metalink4+xml": ["meta4"], "application/mets+xml": ["mets"], "application/mmt-aei+xml": ["maei"], "application/mmt-usd+xml": ["musd"], "application/mods+xml": ["mods"], "application/mp21": ["m21", "mp21"], "application/mp4": ["mp4", "mpg4", "mp4s", "m4p"], "application/msix": ["msix"], "application/msixbundle": ["msixbundle"], "application/msword": ["doc", "dot"], "application/mxf": ["mxf"], "application/n-quads": ["nq"], "application/n-triples": ["nt"], "application/node": ["cjs"], "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"], "application/oda": ["oda"], "application/oebps-package+xml": ["opf"], "application/ogg": ["ogx"], "application/omdoc+xml": ["omdoc"], "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"], "application/oxps": ["oxps"], "application/p2p-overlay+xml": ["relo"], "application/patch-ops-error+xml": ["xer"], "application/pdf": ["pdf"], "application/pgp-encrypted": ["pgp"], "application/pgp-keys": ["asc"], "application/pgp-signature": ["sig", "*asc"], "application/pics-rules": ["prf"], "application/pkcs10": ["p10"], "application/pkcs7-mime": ["p7m", "p7c"], "application/pkcs7-signature": ["p7s"], "application/pkcs8": ["p8"], "application/pkix-attr-cert": ["ac"], "application/pkix-cert": ["cer"], "application/pkix-crl": ["crl"], "application/pkix-pkipath": ["pkipath"], "application/pkixcmp": ["pki"], "application/pls+xml": ["pls"], "application/postscript": ["ai", "eps", "ps"], "application/provenance+xml": ["provx"], "application/pskc+xml": ["pskcxml"], "application/raml+yaml": ["raml"], "application/rdf+xml": ["rdf", "owl"], "application/reginfo+xml": ["rif"], "application/relax-ng-compact-syntax": ["rnc"], "application/resource-lists+xml": ["rl"], "application/resource-lists-diff+xml": ["rld"], "application/rls-services+xml": ["rs"], "application/route-apd+xml": ["rapd"], "application/route-s-tsid+xml": ["sls"], "application/route-usd+xml": ["rusd"], "application/rpki-ghostbusters": ["gbr"], "application/rpki-manifest": ["mft"], "application/rpki-roa": ["roa"], "application/rsd+xml": ["rsd"], "application/rss+xml": ["rss"], "application/rtf": ["rtf"], "application/sbml+xml": ["sbml"], "application/scvp-cv-request": ["scq"], "application/scvp-cv-response": ["scs"], "application/scvp-vp-request": ["spq"], "application/scvp-vp-response": ["spp"], "application/sdp": ["sdp"], "application/senml+xml": ["senmlx"], "application/sensml+xml": ["sensmlx"], "application/set-payment-initiation": ["setpay"], "application/set-registration-initiation": ["setreg"], "application/shf+xml": ["shf"], "application/sieve": ["siv", "sieve"], "application/smil+xml": ["smi", "smil"], "application/sparql-query": ["rq"], "application/sparql-results+xml": ["srx"], "application/sql": ["sql"], "application/srgs": ["gram"], "application/srgs+xml": ["grxml"], "application/sru+xml": ["sru"], "application/ssdl+xml": ["ssdl"], "application/ssml+xml": ["ssml"], "application/swid+xml": ["swidtag"], "application/tei+xml": ["tei", "teicorpus"], "application/thraud+xml": ["tfi"], "application/timestamped-data": ["tsd"], "application/toml": ["toml"], "application/trig": ["trig"], "application/ttml+xml": ["ttml"], "application/ubjson": ["ubj"], "application/urc-ressheet+xml": ["rsheet"], "application/urc-targetdesc+xml": ["td"], "application/voicexml+xml": ["vxml"], "application/wasm": ["wasm"], "application/watcherinfo+xml": ["wif"], "application/widget": ["wgt"], "application/winhlp": ["hlp"], "application/wsdl+xml": ["wsdl"], "application/wspolicy+xml": ["wspolicy"], "application/xaml+xml": ["xaml"], "application/xcap-att+xml": ["xav"], "application/xcap-caps+xml": ["xca"], "application/xcap-diff+xml": ["xdf"], "application/xcap-el+xml": ["xel"], "application/xcap-ns+xml": ["xns"], "application/xenc+xml": ["xenc"], "application/xfdf": ["xfdf"], "application/xhtml+xml": ["xhtml", "xht"], "application/xliff+xml": ["xlf"], "application/xml": ["xml", "xsl", "xsd", "rng"], "application/xml-dtd": ["dtd"], "application/xop+xml": ["xop"], "application/xproc+xml": ["xpl"], "application/xslt+xml": ["*xsl", "xslt"], "application/xspf+xml": ["xspf"], "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"], "application/yang": ["yang"], "application/yin+xml": ["yin"], "application/zip": ["zip"], "audio/3gpp": ["*3gpp"], "audio/aac": ["adts", "aac"], "audio/adpcm": ["adp"], "audio/amr": ["amr"], "audio/basic": ["au", "snd"], "audio/midi": ["mid", "midi", "kar", "rmi"], "audio/mobile-xmf": ["mxmf"], "audio/mp3": ["*mp3"], "audio/mp4": ["m4a", "mp4a"], "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"], "audio/ogg": ["oga", "ogg", "spx", "opus"], "audio/s3m": ["s3m"], "audio/silk": ["sil"], "audio/wav": ["wav"], "audio/wave": ["*wav"], "audio/webm": ["weba"], "audio/xm": ["xm"], "font/collection": ["ttc"], "font/otf": ["otf"], "font/ttf": ["ttf"], "font/woff": ["woff"], "font/woff2": ["woff2"], "image/aces": ["exr"], "image/apng": ["apng"], "image/avci": ["avci"], "image/avcs": ["avcs"], "image/avif": ["avif"], "image/bmp": ["bmp", "dib"], "image/cgm": ["cgm"], "image/dicom-rle": ["drle"], "image/dpx": ["dpx"], "image/emf": ["emf"], "image/fits": ["fits"], "image/g3fax": ["g3"], "image/gif": ["gif"], "image/heic": ["heic"], "image/heic-sequence": ["heics"], "image/heif": ["heif"], "image/heif-sequence": ["heifs"], "image/hej2k": ["hej2"], "image/hsj2": ["hsj2"], "image/ief": ["ief"], "image/jls": ["jls"], "image/jp2": ["jp2", "jpg2"], "image/jpeg": ["jpeg", "jpg", "jpe"], "image/jph": ["jph"], "image/jphc": ["jhc"], "image/jpm": ["jpm", "jpgm"], "image/jpx": ["jpx", "jpf"], "image/jxr": ["jxr"], "image/jxra": ["jxra"], "image/jxrs": ["jxrs"], "image/jxs": ["jxs"], "image/jxsc": ["jxsc"], "image/jxsi": ["jxsi"], "image/jxss": ["jxss"], "image/ktx": ["ktx"], "image/ktx2": ["ktx2"], "image/png": ["png"], "image/sgi": ["sgi"], "image/svg+xml": ["svg", "svgz"], "image/t38": ["t38"], "image/tiff": ["tif", "tiff"], "image/tiff-fx": ["tfx"], "image/webp": ["webp"], "image/wmf": ["wmf"], "message/disposition-notification": ["disposition-notification"], "message/global": ["u8msg"], "message/global-delivery-status": ["u8dsn"], "message/global-disposition-notification": ["u8mdn"], "message/global-headers": ["u8hdr"], "message/rfc822": ["eml", "mime"], "model/3mf": ["3mf"], "model/gltf+json": ["gltf"], "model/gltf-binary": ["glb"], "model/iges": ["igs", "iges"], "model/jt": ["jt"], "model/mesh": ["msh", "mesh", "silo"], "model/mtl": ["mtl"], "model/obj": ["obj"], "model/prc": ["prc"], "model/step+xml": ["stpx"], "model/step+zip": ["stpz"], "model/step-xml+zip": ["stpxz"], "model/stl": ["stl"], "model/u3d": ["u3d"], "model/vrml": ["wrl", "vrml"], "model/x3d+binary": ["*x3db", "x3dbz"], "model/x3d+fastinfoset": ["x3db"], "model/x3d+vrml": ["*x3dv", "x3dvz"], "model/x3d+xml": ["x3d", "x3dz"], "model/x3d-vrml": ["x3dv"], "text/cache-manifest": ["appcache", "manifest"], "text/calendar": ["ics", "ifb"], "text/coffeescript": ["coffee", "litcoffee"], "text/css": ["css"], "text/csv": ["csv"], "text/html": ["html", "htm", "shtml"], "text/jade": ["jade"], "text/javascript": ["js", "mjs"], "text/jsx": ["jsx"], "text/less": ["less"], "text/markdown": ["md", "markdown"], "text/mathml": ["mml"], "text/mdx": ["mdx"], "text/n3": ["n3"], "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"], "text/richtext": ["rtx"], "text/rtf": ["*rtf"], "text/sgml": ["sgml", "sgm"], "text/shex": ["shex"], "text/slim": ["slim", "slm"], "text/spdx": ["spdx"], "text/stylus": ["stylus", "styl"], "text/tab-separated-values": ["tsv"], "text/troff": ["t", "tr", "roff", "man", "me", "ms"], "text/turtle": ["ttl"], "text/uri-list": ["uri", "uris", "urls"], "text/vcard": ["vcard"], "text/vtt": ["vtt"], "text/wgsl": ["wgsl"], "text/xml": ["*xml"], "text/yaml": ["yaml", "yml"], "video/3gpp": ["3gp", "3gpp"], "video/3gpp2": ["3g2"], "video/h261": ["h261"], "video/h263": ["h263"], "video/h264": ["h264"], "video/iso.segment": ["m4s"], "video/jpeg": ["jpgv"], "video/jpm": ["*jpm", "*jpgm"], "video/mj2": ["mj2", "mjp2"], "video/mp2t": ["ts"], "video/mp4": ["*mp4", "mp4v", "*mpg4"], "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"], "video/ogg": ["ogv"], "video/quicktime": ["qt", "mov"], "video/webm": ["webm"]
};
Object.freeze(types);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var _Mime_extensionToType, _Mime_typeToExtension, _Mime_typeToExtensions;
class Mime {
    constructor(...args) {
        _Mime_extensionToType.set(this, new Map());
        _Mime_typeToExtension.set(this, new Map());
        _Mime_typeToExtensions.set(this, new Map());
        for (const arg of args) {
            this.define(arg);
        }
    }
    define(typeMap, force = false) {
        for (let [type, extensions] of Object.entries(typeMap)) {
            type = type.toLowerCase();
            extensions = extensions.map((ext) => ext.toLowerCase());
            if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type)) {
                __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type, new Set());
            }
            const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type);
            let first = true;
            for (let extension of extensions) {
                const starred = extension.startsWith('*');
                extension = starred ? extension.slice(1) : extension;
                allExtensions?.add(extension);
                if (first) {
                    __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type, extension);
                }
                first = false;
                if (starred)
                    continue;
                const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
                if (currentType && currentType != type && !force) {
                    throw new Error(`"${type} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
                }
                __classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type);
            }
        }
        return this;
    }
    getType(path) {
        if (typeof path !== 'string')
            return null;
        const last = path.replace(/^.*[/\\]/, '').toLowerCase();
        const ext = last.replace(/^.*\./, '').toLowerCase();
        const hasPath = last.length < path.length;
        const hasDot = ext.length < last.length - 1;
        if (!hasDot && hasPath)
            return null;
        return __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext) ?? null;
    }
    getExtension(type) {
        if (typeof type !== 'string')
            return null;
        type = type?.split?.(';')[0];
        return ((type && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type.trim().toLowerCase())) ?? null);
    }
    getAllExtensions(type) {
        if (typeof type !== 'string')
            return null;
        return __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type.toLowerCase()) ?? null;
    }
    _freeze() {
        this.define = () => {
            throw new Error('define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances');
        };
        Object.freeze(this);
        for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()) {
            Object.freeze(extensions);
        }
        return this;
    }
    _getTestState() {
        return {
            types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
            extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f"),
        };
    }
}
_Mime_extensionToType = new WeakMap(), _Mime_typeToExtension = new WeakMap(), _Mime_typeToExtensions = new WeakMap();

var mime = new Mime(types)._freeze();

var RelationshipTypes;
(function (RelationshipTypes) {
    RelationshipTypes["OfficeDocument"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument";
    RelationshipTypes["FontTable"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable";
    RelationshipTypes["Image"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
    RelationshipTypes["Numbering"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/numbering";
    RelationshipTypes["Styles"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
    RelationshipTypes["StylesWithEffects"] = "http://schemas.microsoft.com/office/2007/relationships/stylesWithEffects";
    RelationshipTypes["Theme"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
    RelationshipTypes["Settings"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings";
    RelationshipTypes["WebSettings"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/webSettings";
    RelationshipTypes["Hyperlink"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink";
    RelationshipTypes["Footnotes"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footnotes";
    RelationshipTypes["Endnotes"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/endnotes";
    RelationshipTypes["Footer"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer";
    RelationshipTypes["Header"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/header";
    RelationshipTypes["ExtendedProperties"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
    RelationshipTypes["CoreProperties"] = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
    RelationshipTypes["CustomProperties"] = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/custom-properties";
    RelationshipTypes["Comments"] = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
})(RelationshipTypes || (RelationshipTypes = {}));
function parseRelationships(root, xml) {
    return xml.elements(root).map(e => ({
        id: xml.attr(e, "Id"),
        type: xml.attr(e, "Type"),
        target: xml.attr(e, "Target"),
        targetMode: xml.attr(e, "TargetMode")
    }));
}

const ns$2 = {
    wordml: "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    drawingml: "http://schemas.openxmlformats.org/drawingml/2006/main",
    picture: "http://schemas.openxmlformats.org/drawingml/2006/picture",
    compatibility: "http://schemas.openxmlformats.org/markup-compatibility/2006",
    math: "http://schemas.openxmlformats.org/officeDocument/2006/math"
};
const LengthUsage = {
    Px: { mul: 1 / 9525, unit: "px" },
    Dxa: { mul: 0.05, unit: "pt" },
    Emu: { mul: 1 / 12700, unit: "pt" },
    FontSize: { mul: 0.5, unit: "pt" },
    Border: { mul: 0.125, unit: "pt" },
    Point: { mul: 1, unit: "pt" },
    RelativeRect: { mul: 1 / 100000, unit: "" },
    TablePercent: { mul: 0.02, unit: "%" },
    LineHeight: { mul: 1 / 240, unit: "" },
    Opacity: { mul: 1 / 100000, unit: "" },
    VmlEmu: { mul: 1 / 12700, unit: "" },
    degree: { mul: 1 / 60000, unit: "deg" },
};
function convertLength(val, usage = LengthUsage.Dxa, unit = true) {
    if (!val) {
        return null;
    }
    if (typeof val === 'number') {
        let result = val * usage.mul;
        return unit ? `${result.toFixed(2)}${usage.unit}` : result;
    }
    if (/.+(p[xt]|%)$/.test(val)) {
        return val;
    }
    let result = parseFloat(val) * usage.mul;
    return unit ? `${result.toFixed(2)}${usage.unit}` : result;
}
function convertBoolean(v, defaultValue = false) {
    switch (v) {
        case "1":
            return true;
        case "0":
            return false;
        case "on":
            return true;
        case "off":
            return false;
        case "true":
            return true;
        case "false":
            return false;
        default:
            return defaultValue;
    }
}
function parseCommonProperty(elem, props, xml) {
    if (elem.namespaceURI != ns$2.wordml)
        return false;
    switch (elem.localName) {
        case "color":
            props.color = xml.attr(elem, "val");
            break;
        case "sz":
            props.fontSize = xml.lengthAttr(elem, "val", LengthUsage.FontSize);
            break;
        default:
            return false;
    }
    return true;
}

function parseXmlString(xmlString, trimXmlDeclaration = false) {
    if (trimXmlDeclaration)
        xmlString = xmlString.replace(/<[?].*[?]>/, "");
    xmlString = removeUTF8BOM(xmlString);
    const result = new DOMParser().parseFromString(xmlString, "application/xml");
    const errorText = hasXmlParserError(result);
    if (errorText)
        throw new Error(errorText);
    return result;
}
function hasXmlParserError(doc) {
    return doc.getElementsByTagName("parsererror")[0]?.textContent;
}
function removeUTF8BOM(data) {
    return data.charCodeAt(0) === 0xFEFF ? data.substring(1) : data;
}
function serializeXmlString(elem) {
    return new XMLSerializer().serializeToString(elem);
}
class XmlParser {
    elements(elem, localName = null) {
        const result = [];
        for (let i = 0, l = elem.childNodes.length; i < l; i++) {
            let c = elem.childNodes.item(i);
            if (c.nodeType == 1 && (localName == null || c.localName == localName))
                result.push(c);
        }
        return result;
    }
    element(elem, localName) {
        for (let i = 0, l = elem.childNodes.length; i < l; i++) {
            let c = elem.childNodes.item(i);
            if (c.nodeType == 1 && c.localName == localName)
                return c;
        }
        return null;
    }
    elementAttr(elem, localName, attrLocalName) {
        let el = this.element(elem, localName);
        return el ? this.attr(el, attrLocalName) : undefined;
    }
    attrs(elem) {
        return Array.from(elem.attributes);
    }
    attr(elem, localName) {
        for (let i = 0, l = elem.attributes.length; i < l; i++) {
            let a = elem.attributes.item(i);
            if (a.localName == localName)
                return a.value;
        }
        return null;
    }
    intAttr(node, attrName, defaultValue = null) {
        let val = this.attr(node, attrName);
        return val ? parseInt(val) : defaultValue;
    }
    hexAttr(node, attrName, defaultValue = null) {
        let val = this.attr(node, attrName);
        return val ? parseInt(val, 16) : defaultValue;
    }
    floatAttr(node, attrName, defaultValue = null) {
        let val = this.attr(node, attrName);
        return val ? parseFloat(val) : defaultValue;
    }
    boolAttr(node, attrName, defaultValue = null) {
        return convertBoolean(this.attr(node, attrName), defaultValue);
    }
    lengthAttr(node, attrName, usage = LengthUsage.Dxa, defaultValue) {
        let val = this.attr(node, attrName);
        return convertLength(val, usage) ?? defaultValue;
    }
    numberAttr(node, attrName, usage = LengthUsage.Dxa, defaultValue = 0) {
        let val = this.attr(node, attrName);
        return convertLength(val, usage, false) ?? defaultValue;
    }
}
const globalXmlParser = new XmlParser();

class Part {
    constructor(_package, path) {
        this._package = _package;
        this.path = path;
    }
    async load() {
        this.rels = await this._package.loadRelationships(this.path);
        const xmlText = await this._package.load(this.path);
        const xmlDoc = this._package.parseXmlDocument(xmlText);
        if (this._package.options.keepOrigin) {
            this._xmlDocument = xmlDoc;
        }
        this.parseXml(xmlDoc.firstElementChild);
    }
    save() {
        this._package.update(this.path, serializeXmlString(this._xmlDocument));
    }
    parseXml(root) {
    }
}

const embedFontTypeMap = {
    embedRegular: 'regular',
    embedBold: 'bold',
    embedItalic: 'italic',
    embedBoldItalic: 'boldItalic',
};
function parseFonts(root, xml) {
    return xml.elements(root).map(el => parseFont(el, xml));
}
function parseFont(elem, xml) {
    let result = {
        name: xml.attr(elem, "name"),
        embedFontRefs: []
    };
    for (let el of xml.elements(elem)) {
        switch (el.localName) {
            case "family":
                result.family = xml.attr(el, "val");
                break;
            case "altName":
                result.altName = xml.attr(el, "val");
                break;
            case "embedRegular":
            case "embedBold":
            case "embedItalic":
            case "embedBoldItalic":
                result.embedFontRefs.push(parseEmbedFontRef(el, xml));
                break;
        }
    }
    return result;
}
function parseEmbedFontRef(elem, xml) {
    return {
        id: xml.attr(elem, "id"),
        key: xml.attr(elem, "fontKey"),
        type: embedFontTypeMap[elem.localName]
    };
}

class FontTablePart extends Part {
    parseXml(root) {
        this.fonts = parseFonts(root, this._package.xmlParser);
    }
}

function escapeClassName(className) {
    return className?.replace(/[ .]+/g, '-').replace(/[&]+/g, 'and').toLowerCase();
}
function splitPath(path) {
    let si = path.lastIndexOf('/') + 1;
    let folder = si == 0 ? "" : path.substring(0, si);
    let fileName = si == 0 ? path : path.substring(si);
    return [folder, fileName];
}
function resolvePath(path, base) {
    try {
        const prefix = "http://docx/";
        const url = new URL(path, prefix + base).toString();
        return url.substring(prefix.length);
    }
    catch {
        return `${base}${path}`;
    }
}
function keyBy(array, by) {
    return array.reduce((a, x) => {
        a[by(x)] = x;
        return a;
    }, {});
}
function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = () => reject();
        reader.readAsDataURL(blob);
    });
}
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
function isString(item) {
    return typeof item === 'string' || item instanceof String;
}
function mergeDeep(target, ...sources) {
    if (!sources.length)
        return target;
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                const val = target[key] ?? (target[key] = {});
                mergeDeep(val, source[key]);
            }
            else {
                target[key] = source[key];
            }
        }
    }
    return mergeDeep(target, ...sources);
}
function asArray(val) {
    return Array.isArray(val) ? val : [val];
}
function uuid() {
    if (typeof crypto === 'object') {
        if (typeof crypto.randomUUID === 'function') {
            return crypto.randomUUID();
        }
        if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
            const callback = (c) => {
                const num = Number(c);
                return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16);
            };
            return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, callback);
        }
    }
    let timestamp = new Date().getTime();
    let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let random = Math.random() * 16;
        if (timestamp > 0) {
            random = (timestamp + random) % 16 | 0;
            timestamp = Math.floor(timestamp / 16);
        }
        else {
            random = (perforNow + random) % 16 | 0;
            perforNow = Math.floor(perforNow / 16);
        }
        return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
    });
}

class OpenXmlPackage {
    constructor(_zip, options) {
        this._zip = _zip;
        this.options = options;
        this.xmlParser = new XmlParser();
    }
    get(path) {
        return this._zip.files[normalizePath(path)];
    }
    update(path, content) {
        this._zip.file(path, content);
    }
    static async load(input, options) {
        const zip = await JSZip.loadAsync(input);
        return new OpenXmlPackage(zip, options);
    }
    save(type = "blob") {
        return this._zip.generateAsync({ type });
    }
    load(path, type = "string") {
        return this.get(path)?.async(type) ?? Promise.resolve(null);
    }
    async loadRelationships(path = null) {
        let relsPath = `_rels/.rels`;
        if (path != null) {
            const [f, fn] = splitPath(path);
            relsPath = `${f}_rels/${fn}.rels`;
        }
        const txt = await this.load(relsPath);
        return txt ? parseRelationships(this.parseXmlDocument(txt).firstElementChild, this.xmlParser) : null;
    }
    parseXmlDocument(txt) {
        return parseXmlString(txt, this.options.trimXmlDeclaration);
    }
}
function normalizePath(path) {
    return path.startsWith('/') ? path.substr(1) : path;
}

class DocumentPart extends Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
    parseXml(root) {
        this.body = this._documentParser.parseDocumentFile(root);
    }
}

function parseBorder(elem, xml) {
    return {
        type: xml.attr(elem, "val"),
        color: xml.attr(elem, "color"),
        size: xml.lengthAttr(elem, "sz", LengthUsage.Border),
        offset: xml.lengthAttr(elem, "space", LengthUsage.Point),
        frame: xml.boolAttr(elem, 'frame'),
        shadow: xml.boolAttr(elem, 'shadow')
    };
}
function parseBorders(elem, xml) {
    var result = {};
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "left":
                result.left = parseBorder(e, xml);
                break;
            case "top":
                result.top = parseBorder(e, xml);
                break;
            case "right":
                result.right = parseBorder(e, xml);
                break;
            case "bottom":
                result.bottom = parseBorder(e, xml);
                break;
        }
    }
    return result;
}

var SectionType;
(function (SectionType) {
    SectionType["Continuous"] = "continuous";
    SectionType["NextPage"] = "nextPage";
    SectionType["NextColumn"] = "nextColumn";
    SectionType["EvenPage"] = "evenPage";
    SectionType["OddPage"] = "oddPage";
})(SectionType || (SectionType = {}));
function parseSectionProperties(elem, xml = globalXmlParser) {
    let section = {};
    let origin = {};
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "pgSz":
                section.pageSize = {
                    width: xml.lengthAttr(e, "w"),
                    height: xml.lengthAttr(e, "h"),
                    orientation: xml.attr(e, "orient")
                };
                origin.pageSize = {
                    width: xml.intAttr(e, "w"),
                    height: xml.intAttr(e, "h"),
                };
                break;
            case "type":
                section.type = xml.attr(e, "val");
                break;
            case "pgMar":
                section.pageMargins = {
                    left: xml.lengthAttr(e, "left"),
                    right: xml.lengthAttr(e, "right"),
                    top: xml.lengthAttr(e, "top"),
                    bottom: xml.lengthAttr(e, "bottom"),
                    header: xml.lengthAttr(e, "header"),
                    footer: xml.lengthAttr(e, "footer"),
                    gutter: xml.lengthAttr(e, "gutter"),
                };
                origin.pageMargins = {
                    left: xml.intAttr(e, "left"),
                    right: xml.intAttr(e, "right"),
                    top: xml.intAttr(e, "top"),
                    bottom: xml.intAttr(e, "bottom"),
                    header: xml.intAttr(e, "header"),
                    footer: xml.intAttr(e, "footer"),
                    gutter: xml.intAttr(e, "gutter"),
                };
                break;
            case "cols":
                section.columns = parseColumns(e, xml);
                break;
            case "headerReference":
                (section.headerRefs ?? (section.headerRefs = [])).push(parseFooterHeaderReference(e, xml));
                break;
            case "footerReference":
                (section.footerRefs ?? (section.footerRefs = [])).push(parseFooterHeaderReference(e, xml));
                break;
            case "titlePg":
                section.titlePage = xml.boolAttr(e, "val", true);
                break;
            case "pgBorders":
                section.pageBorders = parseBorders(e, xml);
                break;
            case "pgNumType":
                section.pageNumber = parsePageNumber(e, xml);
                break;
        }
    }
    let { width, height } = origin.pageSize;
    let { left, right, top, bottom } = origin.pageMargins;
    section.contentSize = {
        width: convertLength(width - left - right),
        height: convertLength(height - top - bottom),
    };
    return section;
}
function parseColumns(elem, xml) {
    return {
        count: xml.intAttr(elem, "num"),
        space: xml.lengthAttr(elem, "space"),
        separator: xml.boolAttr(elem, "sep"),
        equalWidth: xml.boolAttr(elem, "equalWidth", true),
        columns: xml.elements(elem, "col")
            .map(e => ({
            width: xml.lengthAttr(e, "w"),
            space: xml.lengthAttr(e, "space")
        }))
    };
}
function parsePageNumber(elem, xml) {
    return {
        chapSep: xml.attr(elem, "chapSep"),
        chapStyle: xml.attr(elem, "chapStyle"),
        format: xml.attr(elem, "fmt"),
        start: xml.intAttr(elem, "start")
    };
}
function parseFooterHeaderReference(elem, xml) {
    return {
        id: xml.attr(elem, "id"),
        type: xml.attr(elem, "type"),
    };
}

function parseLineSpacing(elem, xml) {
    return {
        before: xml.lengthAttr(elem, "before"),
        after: xml.lengthAttr(elem, "after"),
        line: xml.intAttr(elem, "line"),
        lineRule: xml.attr(elem, "lineRule")
    };
}

function parseRunProperties(elem, xml) {
    let result = {};
    for (let el of xml.elements(elem)) {
        parseRunProperty(el, result, xml);
    }
    return result;
}
function parseRunProperty(elem, props, xml) {
    if (parseCommonProperty(elem, props, xml))
        return true;
    return false;
}

function parseParagraphProperties(elem, xml) {
    let result = {};
    for (let el of xml.elements(elem)) {
        parseParagraphProperty(el, result, xml);
    }
    return result;
}
function parseParagraphProperty(elem, props, xml) {
    if (elem.namespaceURI != ns$2.wordml)
        return false;
    if (parseCommonProperty(elem, props, xml))
        return true;
    switch (elem.localName) {
        case "tabs":
            props.tabs = parseTabs(elem, xml);
            break;
        case "sectPr":
            props.sectionProps = parseSectionProperties(elem, xml);
            break;
        case "numPr":
            props.numbering = parseNumbering$1(elem, xml);
            break;
        case "spacing":
            props.lineSpacing = parseLineSpacing(elem, xml);
            return false;
        case "textAlignment":
            props.textAlignment = xml.attr(elem, "val");
            return false;
        case "keepLines":
            props.keepLines = xml.boolAttr(elem, "val", true);
            break;
        case "keepNext":
            props.keepNext = xml.boolAttr(elem, "val", true);
            break;
        case "pageBreakBefore":
            props.pageBreakBefore = xml.boolAttr(elem, "val", true);
            break;
        case "outlineLvl":
            props.outlineLevel = xml.intAttr(elem, "val");
            break;
        case "pStyle":
            props.styleName = xml.attr(elem, "val");
            break;
        case "rPr":
            props.runProps = parseRunProperties(elem, xml);
            break;
        default:
            return false;
    }
    return true;
}
function parseTabs(elem, xml) {
    return xml.elements(elem, "tab")
        .map(e => ({
        position: xml.lengthAttr(e, "pos"),
        leader: xml.attr(e, "leader"),
        style: xml.attr(e, "val")
    }));
}
function parseNumbering$1(elem, xml) {
    var result = {};
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "numId":
                result.id = xml.attr(e, "val");
                break;
            case "ilvl":
                result.level = xml.intAttr(e, "val");
                break;
        }
    }
    return result;
}

function parseNumberingPart(elem, xml) {
    let result = {
        numberings: [],
        abstractNumberings: [],
        bulletPictures: []
    };
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "num":
                result.numberings.push(parseNumbering(e, xml));
                break;
            case "abstractNum":
                result.abstractNumberings.push(parseAbstractNumbering(e, xml));
                break;
            case "numPicBullet":
                result.bulletPictures.push(parseNumberingBulletPicture(e, xml));
                break;
        }
    }
    return result;
}
function parseNumbering(elem, xml) {
    let result = {
        id: xml.attr(elem, 'numId'),
        overrides: []
    };
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "abstractNumId":
                result.abstractId = xml.attr(e, "val");
                break;
            case "lvlOverride":
                result.overrides.push(parseNumberingLevelOverrride(e, xml));
                break;
        }
    }
    return result;
}
function parseAbstractNumbering(elem, xml) {
    let result = {
        id: xml.attr(elem, 'abstractNumId'),
        levels: []
    };
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "name":
                result.name = xml.attr(e, "val");
                break;
            case "multiLevelType":
                result.multiLevelType = xml.attr(e, "val");
                break;
            case "numStyleLink":
                result.numberingStyleLink = xml.attr(e, "val");
                break;
            case "styleLink":
                result.styleLink = xml.attr(e, "val");
                break;
            case "lvl":
                result.levels.push(parseNumberingLevel(e, xml));
                break;
        }
    }
    return result;
}
function parseNumberingLevel(elem, xml) {
    let result = {
        level: xml.intAttr(elem, 'ilvl')
    };
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "start":
                result.start = xml.attr(e, "val");
                break;
            case "lvlRestart":
                result.restart = xml.intAttr(e, "val");
                break;
            case "numFmt":
                result.format = xml.attr(e, "val");
                break;
            case "lvlText":
                result.text = xml.attr(e, "val");
                break;
            case "lvlJc":
                result.justification = xml.attr(e, "val");
                break;
            case "lvlPicBulletId":
                result.bulletPictureId = xml.attr(e, "val");
                break;
            case "pStyle":
                result.paragraphStyle = xml.attr(e, "val");
                break;
            case "pPr":
                result.paragraphProps = parseParagraphProperties(e, xml);
                break;
            case "rPr":
                result.runProps = parseRunProperties(e, xml);
                break;
        }
    }
    return result;
}
function parseNumberingLevelOverrride(elem, xml) {
    let result = {
        level: xml.intAttr(elem, 'ilvl')
    };
    for (let e of xml.elements(elem)) {
        switch (e.localName) {
            case "startOverride":
                result.start = xml.intAttr(e, "val");
                break;
            case "lvl":
                result.numberingLevel = parseNumberingLevel(e, xml);
                break;
        }
    }
    return result;
}
function parseNumberingBulletPicture(elem, xml) {
    var pict = xml.element(elem, "pict");
    var shape = pict && xml.element(pict, "shape");
    var imagedata = shape && xml.element(shape, "imagedata");
    return imagedata ? {
        id: xml.attr(elem, "numPicBulletId"),
        referenceId: xml.attr(imagedata, "id"),
        style: xml.attr(shape, "style")
    } : null;
}

class NumberingPart extends Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
    parseXml(root) {
        Object.assign(this, parseNumberingPart(root, this._package.xmlParser));
        this.domNumberings = this._documentParser.parseNumberingFile(root);
    }
}

class StylesPart extends Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
    parseXml(root) {
        this.styles = this._documentParser.parseStylesFile(root);
    }
}

var DomType;
(function (DomType) {
    DomType["Document"] = "document";
    DomType["Paragraph"] = "paragraph";
    DomType["Run"] = "run";
    DomType["Break"] = "break";
    DomType["NoBreakHyphen"] = "noBreakHyphen";
    DomType["Table"] = "table";
    DomType["Row"] = "row";
    DomType["Cell"] = "cell";
    DomType["Hyperlink"] = "hyperlink";
    DomType["Drawing"] = "drawing";
    DomType["Image"] = "image";
    DomType["Text"] = "text";
    DomType["Tab"] = "tab";
    DomType["Symbol"] = "symbol";
    DomType["BookmarkStart"] = "bookmarkStart";
    DomType["BookmarkEnd"] = "bookmarkEnd";
    DomType["Footer"] = "footer";
    DomType["Header"] = "header";
    DomType["FootnoteReference"] = "footnoteReference";
    DomType["EndnoteReference"] = "endnoteReference";
    DomType["Footnote"] = "footnote";
    DomType["Endnote"] = "endnote";
    DomType["SimpleField"] = "simpleField";
    DomType["ComplexField"] = "complexField";
    DomType["Instruction"] = "instruction";
    DomType["VmlPicture"] = "vmlPicture";
    DomType["Shape"] = "shape";
    DomType["MmlMath"] = "mmlMath";
    DomType["MmlMathParagraph"] = "mmlMathParagraph";
    DomType["MmlFraction"] = "mmlFraction";
    DomType["MmlFunction"] = "mmlFunction";
    DomType["MmlFunctionName"] = "mmlFunctionName";
    DomType["MmlNumerator"] = "mmlNumerator";
    DomType["MmlDenominator"] = "mmlDenominator";
    DomType["MmlRadical"] = "mmlRadical";
    DomType["MmlBase"] = "mmlBase";
    DomType["MmlDegree"] = "mmlDegree";
    DomType["MmlSuperscript"] = "mmlSuperscript";
    DomType["MmlSubscript"] = "mmlSubscript";
    DomType["MmlPreSubSuper"] = "mmlPreSubSuper";
    DomType["MmlSubArgument"] = "mmlSubArgument";
    DomType["MmlSuperArgument"] = "mmlSuperArgument";
    DomType["MmlNary"] = "mmlNary";
    DomType["MmlDelimiter"] = "mmlDelimiter";
    DomType["MmlRun"] = "mmlRun";
    DomType["MmlEquationArray"] = "mmlEquationArray";
    DomType["MmlLimit"] = "mmlLimit";
    DomType["MmlLimitLower"] = "mmlLimitLower";
    DomType["MmlMatrix"] = "mmlMatrix";
    DomType["MmlMatrixRow"] = "mmlMatrixRow";
    DomType["MmlBox"] = "mmlBox";
    DomType["MmlBar"] = "mmlBar";
    DomType["MmlGroupChar"] = "mmlGroupChar";
    DomType["VmlElement"] = "vmlElement";
    DomType["Inserted"] = "inserted";
    DomType["Deleted"] = "deleted";
    DomType["DeletedText"] = "deletedText";
    DomType["Comment"] = "comment";
    DomType["CommentReference"] = "commentReference";
    DomType["CommentRangeStart"] = "commentRangeStart";
    DomType["CommentRangeEnd"] = "commentRangeEnd";
})(DomType || (DomType = {}));
class OpenXmlElementBase {
    constructor() {
        this.children = [];
        this.cssStyle = {};
    }
}
var WrapType;
(function (WrapType) {
    WrapType["Inline"] = "Inline";
    WrapType["None"] = "None";
    WrapType["TopAndBottom"] = "TopAndBottom";
    WrapType["Tight"] = "Tight";
    WrapType["Through"] = "Through";
    WrapType["Square"] = "Square";
    WrapType["Polygon"] = "Polygon";
})(WrapType || (WrapType = {}));

class WmlHeader extends OpenXmlElementBase {
    constructor() {
        super(...arguments);
        this.type = DomType.Header;
    }
}
class WmlFooter extends OpenXmlElementBase {
    constructor() {
        super(...arguments);
        this.type = DomType.Footer;
    }
}

class BaseHeaderFooterPart extends Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
    parseXml(root) {
        this.rootElement = this.createRootElement();
        this.rootElement.children = this._documentParser.parseBodyElements(root);
    }
}
class HeaderPart extends BaseHeaderFooterPart {
    createRootElement() {
        return new WmlHeader();
    }
}
class FooterPart extends BaseHeaderFooterPart {
    createRootElement() {
        return new WmlFooter();
    }
}

function parseExtendedProps(root, xmlParser) {
    const result = {};
    for (let el of xmlParser.elements(root)) {
        switch (el.localName) {
            case "Template":
                result.template = el.textContent;
                break;
            case "Pages":
                result.pages = safeParseToInt(el.textContent);
                break;
            case "Words":
                result.words = safeParseToInt(el.textContent);
                break;
            case "Characters":
                result.characters = safeParseToInt(el.textContent);
                break;
            case "Application":
                result.application = el.textContent;
                break;
            case "Lines":
                result.lines = safeParseToInt(el.textContent);
                break;
            case "Paragraphs":
                result.paragraphs = safeParseToInt(el.textContent);
                break;
            case "Company":
                result.company = el.textContent;
                break;
            case "AppVersion":
                result.appVersion = el.textContent;
                break;
        }
    }
    return result;
}
function safeParseToInt(value) {
    if (typeof value === 'undefined')
        return;
    return parseInt(value);
}

class ExtendedPropsPart extends Part {
    parseXml(root) {
        this.props = parseExtendedProps(root, this._package.xmlParser);
    }
}

function parseCoreProps(root, xmlParser) {
    const result = {};
    for (let el of xmlParser.elements(root)) {
        switch (el.localName) {
            case "title":
                result.title = el.textContent;
                break;
            case "description":
                result.description = el.textContent;
                break;
            case "subject":
                result.subject = el.textContent;
                break;
            case "creator":
                result.creator = el.textContent;
                break;
            case "keywords":
                result.keywords = el.textContent;
                break;
            case "language":
                result.language = el.textContent;
                break;
            case "lastModifiedBy":
                result.lastModifiedBy = el.textContent;
                break;
            case "revision":
                el.textContent && (result.revision = parseInt(el.textContent));
                break;
        }
    }
    return result;
}

class CorePropsPart extends Part {
    parseXml(root) {
        this.props = parseCoreProps(root, this._package.xmlParser);
    }
}

class DmlTheme {
}
function parseTheme(elem, xml) {
    var result = new DmlTheme();
    var themeElements = xml.element(elem, "themeElements");
    for (let el of xml.elements(themeElements)) {
        switch (el.localName) {
            case "clrScheme":
                result.colorScheme = parseColorScheme(el, xml);
                break;
            case "fontScheme":
                result.fontScheme = parseFontScheme(el, xml);
                break;
        }
    }
    return result;
}
function parseColorScheme(elem, xml) {
    var result = {
        name: xml.attr(elem, "name"),
        colors: {}
    };
    for (let el of xml.elements(elem)) {
        var srgbClr = xml.element(el, "srgbClr");
        var sysClr = xml.element(el, "sysClr");
        if (srgbClr) {
            result.colors[el.localName] = xml.attr(srgbClr, "val");
        }
        else if (sysClr) {
            result.colors[el.localName] = xml.attr(sysClr, "lastClr");
        }
    }
    return result;
}
function parseFontScheme(elem, xml) {
    var result = {
        name: xml.attr(elem, "name"),
    };
    for (let el of xml.elements(elem)) {
        switch (el.localName) {
            case "majorFont":
                result.majorFont = parseFontInfo(el, xml);
                break;
            case "minorFont":
                result.minorFont = parseFontInfo(el, xml);
                break;
        }
    }
    return result;
}
function parseFontInfo(elem, xml) {
    return {
        latinTypeface: xml.elementAttr(elem, "latin", "typeface"),
        eaTypeface: xml.elementAttr(elem, "ea", "typeface"),
        csTypeface: xml.elementAttr(elem, "cs", "typeface"),
    };
}

class ThemePart extends Part {
    constructor(pkg, path) {
        super(pkg, path);
    }
    parseXml(root) {
        this.theme = parseTheme(root, this._package.xmlParser);
    }
}

class WmlBaseNote {
}
class WmlFootnote extends WmlBaseNote {
    constructor() {
        super(...arguments);
        this.type = DomType.Footnote;
    }
}
class WmlEndnote extends WmlBaseNote {
    constructor() {
        super(...arguments);
        this.type = DomType.Endnote;
    }
}

class BaseNotePart extends Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
}
class FootnotesPart extends BaseNotePart {
    constructor(pkg, path, parser) {
        super(pkg, path, parser);
    }
    parseXml(root) {
        this.notes = this._documentParser.parseNotes(root, "footnote", WmlFootnote);
    }
}
class EndnotesPart extends BaseNotePart {
    constructor(pkg, path, parser) {
        super(pkg, path, parser);
    }
    parseXml(root) {
        this.notes = this._documentParser.parseNotes(root, "endnote", WmlEndnote);
    }
}

function parseSettings(elem, xml) {
    var result = {};
    for (let el of xml.elements(elem)) {
        switch (el.localName) {
            case "defaultTabStop":
                result.defaultTabStop = xml.lengthAttr(el, "val");
                break;
            case "footnotePr":
                result.footnoteProps = parseNoteProperties(el, xml);
                break;
            case "endnotePr":
                result.endnoteProps = parseNoteProperties(el, xml);
                break;
            case "autoHyphenation":
                result.autoHyphenation = xml.boolAttr(el, "val");
                break;
        }
    }
    return result;
}
function parseNoteProperties(elem, xml) {
    var result = {
        defaultNoteIds: []
    };
    for (let el of xml.elements(elem)) {
        switch (el.localName) {
            case "numFmt":
                result.nummeringFormat = xml.attr(el, "val");
                break;
            case "footnote":
            case "endnote":
                result.defaultNoteIds.push(xml.attr(el, "id"));
                break;
        }
    }
    return result;
}

class SettingsPart extends Part {
    constructor(pkg, path) {
        super(pkg, path);
    }
    parseXml(root) {
        this.settings = parseSettings(root, this._package.xmlParser);
    }
}

function parseCustomProps(root, xml) {
    return xml.elements(root, "property").map(e => {
        const firstChild = e.firstChild;
        return {
            formatId: xml.attr(e, "fmtid"),
            name: xml.attr(e, "name"),
            type: firstChild.nodeName,
            value: firstChild.textContent
        };
    });
}

class CustomPropsPart extends Part {
    parseXml(root) {
        this.props = parseCustomProps(root, this._package.xmlParser);
    }
}

class CommentsPart extends Part {
    constructor(pkg, path, parser) {
        super(pkg, path);
        this._documentParser = parser;
    }
    parseXml(root) {
        this.comments = this._documentParser.parseComments(root);
        this.commentMap = keyBy(this.comments, x => x.id);
    }
}

const topLevelRels = [
    { type: RelationshipTypes.OfficeDocument, target: "word/document.xml" },
    { type: RelationshipTypes.ExtendedProperties, target: "docProps/app.xml" },
    { type: RelationshipTypes.CoreProperties, target: "docProps/core.xml" },
    { type: RelationshipTypes.CustomProperties, target: "docProps/custom.xml" },
];
class WordDocument {
    constructor() {
        this.parts = [];
        this.partsMap = {};
    }
    static async load(blob, parser, options) {
        var d = new WordDocument();
        d._options = options;
        d._parser = parser;
        d._package = await OpenXmlPackage.load(blob, options);
        d.rels = await d._package.loadRelationships();
        await Promise.all(topLevelRels.map(rel => {
            const r = d.rels.find(x => x.type === rel.type) ?? rel;
            return d.loadRelationshipPart(r.target, r.type);
        }));
        return d;
    }
    save(type = "blob") {
        return this._package.save(type);
    }
    async loadRelationshipPart(path, type) {
        if (this.partsMap[path])
            return this.partsMap[path];
        if (!this._package.get(path))
            return null;
        let part = null;
        switch (type) {
            case RelationshipTypes.OfficeDocument:
                this.documentPart = part = new DocumentPart(this._package, path, this._parser);
                break;
            case RelationshipTypes.FontTable:
                this.fontTablePart = part = new FontTablePart(this._package, path);
                break;
            case RelationshipTypes.Numbering:
                this.numberingPart = part = new NumberingPart(this._package, path, this._parser);
                break;
            case RelationshipTypes.Styles:
                this.stylesPart = part = new StylesPart(this._package, path, this._parser);
                break;
            case RelationshipTypes.Theme:
                this.themePart = part = new ThemePart(this._package, path);
                break;
            case RelationshipTypes.Footnotes:
                this.footnotesPart = part = new FootnotesPart(this._package, path, this._parser);
                break;
            case RelationshipTypes.Endnotes:
                this.endnotesPart = part = new EndnotesPart(this._package, path, this._parser);
                break;
            case RelationshipTypes.Footer:
                part = new FooterPart(this._package, path, this._parser);
                break;
            case RelationshipTypes.Header:
                part = new HeaderPart(this._package, path, this._parser);
                break;
            case RelationshipTypes.CoreProperties:
                this.corePropsPart = part = new CorePropsPart(this._package, path);
                break;
            case RelationshipTypes.ExtendedProperties:
                this.extendedPropsPart = part = new ExtendedPropsPart(this._package, path);
                break;
            case RelationshipTypes.CustomProperties:
                part = new CustomPropsPart(this._package, path);
                break;
            case RelationshipTypes.Settings:
                this.settingsPart = part = new SettingsPart(this._package, path);
                break;
            case RelationshipTypes.Comments:
                this.commentsPart = part = new CommentsPart(this._package, path, this._parser);
                break;
        }
        if (part == null)
            return Promise.resolve(null);
        this.partsMap[path] = part;
        this.parts.push(part);
        await part.load();
        if (part.rels?.length > 0) {
            const [folder] = splitPath(part.path);
            await Promise.all(part.rels.map(rel => this.loadRelationshipPart(resolvePath(rel.target, folder), rel.type)));
        }
        return part;
    }
    async loadDocumentImage(id, part) {
        const blob = await this.loadResource(part ?? this.documentPart, id, "blob");
        return this.blobToURL(blob);
    }
    async loadNumberingImage(id) {
        const blob = await this.loadResource(this.numberingPart, id, "blob");
        return this.blobToURL(blob);
    }
    async loadFont(id, key) {
        const x = await this.loadResource(this.fontTablePart, id, "uint8array");
        return x ? this.blobToURL(new Blob([deobfuscate(x, key)])) : x;
    }
    blobToURL(blob) {
        if (!blob)
            return null;
        if (this._options.useBase64URL) {
            return blobToBase64(blob);
        }
        return URL.createObjectURL(blob);
    }
    findPartByRelId(id, basePart = null) {
        var rel = (basePart.rels ?? this.rels).find(r => r.id == id);
        const folder = basePart ? splitPath(basePart.path)[0] : '';
        return rel ? this.partsMap[resolvePath(rel.target, folder)] : null;
    }
    getPathById(part, id) {
        const rel = part.rels.find(x => x.id == id);
        const [folder] = splitPath(part.path);
        return rel ? resolvePath(rel.target, folder) : null;
    }
    async loadResource(part, id, outputType) {
        const path = this.getPathById(part, id);
        let type = mime.getType(path);
        if (path) {
            let origin_blob = await this._package.load(path, outputType);
            return new Blob([origin_blob], { type });
        }
        else {
            return Promise.resolve(null);
        }
    }
}
function deobfuscate(data, guidKey) {
    const len = 16;
    const trimmed = guidKey.replace(/{|}|-/g, "");
    const numbers = new Array(len);
    for (let i = 0; i < len; i++)
        numbers[len - i - 1] = parseInt(trimmed.substr(i * 2, 2), 16);
    for (let i = 0; i < 32; i++)
        data[i] = data[i] ^ numbers[i % len];
    return data;
}

function parseBookmarkStart(elem, xml) {
    return {
        type: DomType.BookmarkStart,
        id: xml.attr(elem, "id"),
        name: xml.attr(elem, "name"),
        colFirst: xml.intAttr(elem, "colFirst"),
        colLast: xml.intAttr(elem, "colLast")
    };
}
function parseBookmarkEnd(elem, xml) {
    return {
        type: DomType.BookmarkEnd,
        id: xml.attr(elem, "id")
    };
}

class VmlElement extends OpenXmlElementBase {
    constructor() {
        super(...arguments);
        this.type = DomType.VmlElement;
        this.attrs = {};
    }
}
function parseVmlElement(elem, parser) {
    var result = new VmlElement();
    switch (elem.localName) {
        case "rect":
            result.tagName = "rect";
            Object.assign(result.attrs, { width: '100%', height: '100%' });
            break;
        case "oval":
            result.tagName = "ellipse";
            Object.assign(result.attrs, { cx: "50%", cy: "50%", rx: "50%", ry: "50%" });
            break;
        case "line":
            result.tagName = "line";
            break;
        case "shape":
            result.tagName = "g";
            break;
        case "textbox":
            result.tagName = "foreignObject";
            Object.assign(result.attrs, { width: '100%', height: '100%' });
            break;
        default:
            return null;
    }
    for (const at of globalXmlParser.attrs(elem)) {
        switch (at.localName) {
            case "style":
                result.cssStyleText = at.value;
                break;
            case "fillcolor":
                result.attrs.fill = at.value;
                break;
            case "from":
                const [x1, y1] = parsePoint(at.value);
                Object.assign(result.attrs, { x1, y1 });
                break;
            case "to":
                const [x2, y2] = parsePoint(at.value);
                Object.assign(result.attrs, { x2, y2 });
                break;
        }
    }
    for (const el of globalXmlParser.elements(elem)) {
        switch (el.localName) {
            case "stroke":
                Object.assign(result.attrs, parseStroke(el));
                break;
            case "fill":
                Object.assign(result.attrs, parseFill());
                break;
            case "imagedata":
                result.tagName = "image";
                Object.assign(result.attrs, { width: '100%', height: '100%' });
                result.imageHref = {
                    id: globalXmlParser.attr(el, "id"),
                    title: globalXmlParser.attr(el, "title"),
                };
                break;
            case "txbxContent":
                result.children.push(...parser.parseBodyElements(el));
                break;
            default:
                const child = parseVmlElement(el, parser);
                child && result.children.push(child);
                break;
        }
    }
    return result;
}
function parseStroke(el) {
    return {
        'stroke': globalXmlParser.attr(el, "color"),
        'stroke-width': globalXmlParser.lengthAttr(el, "weight", LengthUsage.Emu) ?? '1px'
    };
}
function parseFill(el) {
    return {};
}
function parsePoint(val) {
    return val.split(",");
}

class WmlComment extends OpenXmlElementBase {
    constructor() {
        super(...arguments);
        this.type = DomType.Comment;
    }
}
class WmlCommentReference extends OpenXmlElementBase {
    constructor(id) {
        super();
        this.id = id;
        this.type = DomType.CommentReference;
    }
}
class WmlCommentRangeStart extends OpenXmlElementBase {
    constructor(id) {
        super();
        this.id = id;
        this.type = DomType.CommentRangeStart;
    }
}
class WmlCommentRangeEnd extends OpenXmlElementBase {
    constructor(id) {
        super();
        this.id = id;
        this.type = DomType.CommentRangeEnd;
    }
}

var autos = {
    shd: "inherit",
    color: "black",
    borderColor: "black",
    highlight: "transparent"
};
const supportedNamespaceURIs = [];
const mmlTagMap = {
    "oMath": DomType.MmlMath,
    "oMathPara": DomType.MmlMathParagraph,
    "f": DomType.MmlFraction,
    "func": DomType.MmlFunction,
    "fName": DomType.MmlFunctionName,
    "num": DomType.MmlNumerator,
    "den": DomType.MmlDenominator,
    "rad": DomType.MmlRadical,
    "deg": DomType.MmlDegree,
    "e": DomType.MmlBase,
    "sSup": DomType.MmlSuperscript,
    "sSub": DomType.MmlSubscript,
    "sPre": DomType.MmlPreSubSuper,
    "sup": DomType.MmlSuperArgument,
    "sub": DomType.MmlSubArgument,
    "d": DomType.MmlDelimiter,
    "nary": DomType.MmlNary,
    "eqArr": DomType.MmlEquationArray,
    "lim": DomType.MmlLimit,
    "limLow": DomType.MmlLimitLower,
    "m": DomType.MmlMatrix,
    "mr": DomType.MmlMatrixRow,
    "box": DomType.MmlBox,
    "bar": DomType.MmlBar,
    "groupChr": DomType.MmlGroupChar
};
const defaultDocumentParserOptions = {
    ignoreWidth: false,
    debug: false,
    ignoreTableWrap: true,
    ignoreImageWrap: true,
};
class DocumentParser {
    constructor(options) {
        this.options = {
            ...defaultDocumentParserOptions,
            ...options
        };
    }
    parseNotes(xmlDoc, elemName, elemClass) {
        let result = [];
        for (let el of globalXmlParser.elements(xmlDoc, elemName)) {
            const node = new elemClass();
            node.id = globalXmlParser.attr(el, "id");
            node.noteType = globalXmlParser.attr(el, "type");
            node.children = this.parseBodyElements(el);
            result.push(node);
        }
        return result;
    }
    parseComments(xmlDoc) {
        let result = [];
        for (let el of globalXmlParser.elements(xmlDoc, "comment")) {
            const item = new WmlComment();
            item.id = globalXmlParser.attr(el, "id");
            item.author = globalXmlParser.attr(el, "author");
            item.initials = globalXmlParser.attr(el, "initials");
            item.date = globalXmlParser.attr(el, "date");
            item.children = this.parseBodyElements(el);
            result.push(item);
        }
        return result;
    }
    parseDocumentFile(xmlDoc) {
        let xbody = globalXmlParser.element(xmlDoc, "body");
        let background = globalXmlParser.element(xmlDoc, "background");
        let sectPr = globalXmlParser.element(xbody, "sectPr");
        let props = {};
        if (sectPr) {
            props = parseSectionProperties(sectPr, globalXmlParser);
        }
        props.sectionId = uuid();
        return {
            type: DomType.Document,
            children: this.parseBodyElements(xbody),
            pages: [],
            props,
            cssStyle: background ? this.parseBackground(background) : {},
        };
    }
    parseBackground(elem) {
        let result = {};
        let color = xmlUtil.colorAttr(elem, "color");
        if (color) {
            result["background-color"] = color;
        }
        return result;
    }
    parseBodyElements(element) {
        let children = [];
        for (let elem of globalXmlParser.elements(element)) {
            switch (elem.localName) {
                case "p":
                    children.push(this.parseParagraph(elem));
                    break;
                case "tbl":
                    children.push(this.parseTable(elem));
                    break;
                case "sdt":
                    children.push(...this.parseSdt(elem, (e) => this.parseBodyElements(e)));
                    break;
            }
        }
        return children;
    }
    parseStylesFile(xstyles) {
        let result = [];
        xmlUtil.foreach(xstyles, n => {
            switch (n.localName) {
                case "style":
                    result.push(this.parseStyle(n));
                    break;
                case "docDefaults":
                    result.push(this.parseDefaultStyles(n));
                    break;
            }
        });
        return result;
    }
    parseDefaultStyles(node) {
        let result = {
            id: null,
            name: null,
            target: null,
            basedOn: null,
            styles: []
        };
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "rPrDefault":
                    let rPr = globalXmlParser.element(c, "rPr");
                    if (rPr)
                        result.styles.push({
                            target: "span",
                            values: this.parseDefaultProperties(rPr, {})
                        });
                    break;
                case "pPrDefault":
                    let pPr = globalXmlParser.element(c, "pPr");
                    if (pPr)
                        result.styles.push({
                            target: "p",
                            values: this.parseDefaultProperties(pPr, {})
                        });
                    break;
            }
        });
        return result;
    }
    parseStyle(node) {
        let result = {
            id: globalXmlParser.attr(node, "styleId"),
            isDefault: globalXmlParser.boolAttr(node, "default"),
            name: null,
            target: null,
            basedOn: null,
            styles: [],
            linked: null
        };
        switch (globalXmlParser.attr(node, "type")) {
            case "paragraph":
                result.target = "p";
                break;
            case "table":
                result.target = "table";
                break;
            case "character":
                result.target = "span";
                break;
        }
        xmlUtil.foreach(node, n => {
            switch (n.localName) {
                case "basedOn":
                    result.basedOn = globalXmlParser.attr(n, "val");
                    break;
                case "name":
                    result.name = globalXmlParser.attr(n, "val");
                    break;
                case "link":
                    result.linked = globalXmlParser.attr(n, "val");
                    break;
                case "next":
                    result.next = globalXmlParser.attr(n, "val");
                    break;
                case "aliases":
                    result.aliases = globalXmlParser.attr(n, "val").split(",");
                    break;
                case "pPr":
                    result.styles.push({
                        target: "p",
                        values: this.parseDefaultProperties(n, {})
                    });
                    result.paragraphProps = parseParagraphProperties(n, globalXmlParser);
                    break;
                case "rPr":
                    result.styles.push({
                        target: "span",
                        values: this.parseDefaultProperties(n, {})
                    });
                    result.runProps = parseRunProperties(n, globalXmlParser);
                    break;
                case "tblPr":
                case "tcPr":
                    result.styles.push({
                        target: "td",
                        values: this.parseDefaultProperties(n, {})
                    });
                    break;
                case "tblStylePr":
                    for (let s of this.parseTableStyle(n))
                        result.styles.push(s);
                    break;
                case "rsid":
                case "qFormat":
                case "hidden":
                case "semiHidden":
                case "unhideWhenUsed":
                case "autoRedefine":
                case "uiPriority":
                    break;
                default:
                    this.options.debug && console.warn(`DOCX: Unknown style element: ${n.localName}`);
            }
        });
        return result;
    }
    parseTableStyle(node) {
        let result = [];
        let type = globalXmlParser.attr(node, "type");
        let selector = "";
        let modificator = "";
        switch (type) {
            case "firstRow":
                modificator = ".first-row";
                selector = "tr.first-row td";
                break;
            case "lastRow":
                modificator = ".last-row";
                selector = "tr.last-row td";
                break;
            case "firstCol":
                modificator = ".first-col";
                selector = "td.first-col";
                break;
            case "lastCol":
                modificator = ".last-col";
                selector = "td.last-col";
                break;
            case "band1Vert":
                modificator = ":not(.no-vband)";
                selector = "td.odd-col";
                break;
            case "band2Vert":
                modificator = ":not(.no-vband)";
                selector = "td.even-col";
                break;
            case "band1Horz":
                modificator = ":not(.no-hband)";
                selector = "tr.odd-row";
                break;
            case "band2Horz":
                modificator = ":not(.no-hband)";
                selector = "tr.even-row";
                break;
            default:
                return [];
        }
        xmlUtil.foreach(node, n => {
            switch (n.localName) {
                case "pPr":
                    result.push({
                        target: `${selector} p`,
                        mod: modificator,
                        values: this.parseDefaultProperties(n, {})
                    });
                    break;
                case "rPr":
                    result.push({
                        target: `${selector} span`,
                        mod: modificator,
                        values: this.parseDefaultProperties(n, {})
                    });
                    break;
                case "tblPr":
                case "tcPr":
                    result.push({
                        target: selector,
                        mod: modificator,
                        values: this.parseDefaultProperties(n, {})
                    });
                    break;
            }
        });
        return result;
    }
    parseNumberingFile(xnums) {
        let result = [];
        const mapping = {};
        let bullets = [];
        xmlUtil.foreach(xnums, n => {
            switch (n.localName) {
                case "abstractNum":
                    this.parseAbstractNumbering(n, bullets)
                        .forEach(x => result.push(x));
                    break;
                case "numPicBullet":
                    bullets.push(this.parseNumberingPicBullet(n));
                    break;
                case "num":
                    let numId = globalXmlParser.attr(n, "numId");
                    let abstractNumId = globalXmlParser.elementAttr(n, "abstractNumId", "val");
                    mapping[abstractNumId] = numId;
                    break;
            }
        });
        result.forEach(x => x.id = mapping[x.id]);
        return result;
    }
    parseNumberingPicBullet(elem) {
        let pict = globalXmlParser.element(elem, "pict");
        let shape = pict && globalXmlParser.element(pict, "shape");
        let imagedata = shape && globalXmlParser.element(shape, "imagedata");
        return imagedata ? {
            id: globalXmlParser.intAttr(elem, "numPicBulletId"),
            src: globalXmlParser.attr(imagedata, "id"),
            style: globalXmlParser.attr(shape, "style")
        } : null;
    }
    parseAbstractNumbering(node, bullets) {
        let result = [];
        let id = globalXmlParser.attr(node, "abstractNumId");
        xmlUtil.foreach(node, n => {
            switch (n.localName) {
                case "lvl":
                    result.push(this.parseNumberingLevel(id, n, bullets));
                    break;
            }
        });
        return result;
    }
    parseNumberingLevel(id, node, bullets) {
        let result = {
            id: id,
            level: globalXmlParser.intAttr(node, "ilvl"),
            start: 1,
            pStyleName: undefined,
            pStyle: {},
            rStyle: {},
            suff: "tab"
        };
        xmlUtil.foreach(node, n => {
            switch (n.localName) {
                case "start":
                    result.start = globalXmlParser.intAttr(n, "val");
                    break;
                case "pPr":
                    this.parseDefaultProperties(n, result.pStyle);
                    break;
                case "rPr":
                    this.parseDefaultProperties(n, result.rStyle);
                    break;
                case "lvlPicBulletId":
                    let id = globalXmlParser.intAttr(n, "val");
                    result.bullet = bullets.find(x => x.id == id);
                    break;
                case "lvlText":
                    result.levelText = globalXmlParser.attr(n, "val");
                    break;
                case "pStyle":
                    result.pStyleName = globalXmlParser.attr(n, "val");
                    break;
                case "numFmt":
                    result.format = globalXmlParser.attr(n, "val");
                    break;
                case "suff":
                    result.suff = globalXmlParser.attr(n, "val");
                    break;
            }
        });
        return result;
    }
    parseSdt(node, parser) {
        const sdtContent = globalXmlParser.element(node, "sdtContent");
        return sdtContent ? parser(sdtContent) : [];
    }
    parseInserted(node, parentParser) {
        return {
            type: DomType.Inserted,
            children: parentParser(node)?.children ?? []
        };
    }
    parseDeleted(node, parentParser) {
        return {
            type: DomType.Deleted,
            children: parentParser(node)?.children ?? []
        };
    }
    parseParagraph(node) {
        let wmlParagraph = { type: DomType.Paragraph, children: [] };
        for (let el of globalXmlParser.elements(node)) {
            switch (el.localName) {
                case "pPr":
                    this.parseParagraphProperties(el, wmlParagraph);
                    break;
                case "r":
                    wmlParagraph.children.push(this.parseRun(el, wmlParagraph));
                    break;
                case "hyperlink":
                    wmlParagraph.children.push(this.parseHyperlink(el, wmlParagraph));
                    break;
                case "bookmarkStart":
                    wmlParagraph.children.push(parseBookmarkStart(el, globalXmlParser));
                    break;
                case "bookmarkEnd":
                    wmlParagraph.children.push(parseBookmarkEnd(el, globalXmlParser));
                    break;
                case "commentRangeStart":
                    wmlParagraph.children.push(new WmlCommentRangeStart(globalXmlParser.attr(el, "id")));
                    break;
                case "commentRangeEnd":
                    wmlParagraph.children.push(new WmlCommentRangeEnd(globalXmlParser.attr(el, "id")));
                    break;
                case "oMath":
                case "oMathPara":
                    wmlParagraph.children.push(this.parseMathElement(el));
                    break;
                case "sdt":
                    wmlParagraph.children.push(...this.parseSdt(el, (e) => this.parseParagraph(e).children));
                    break;
                case "ins":
                    wmlParagraph.children.push(this.parseInserted(el, (e) => this.parseParagraph(e)));
                    break;
                case "del":
                    wmlParagraph.children.push(this.parseDeleted(el, (e) => this.parseParagraph(e)));
                    break;
            }
        }
        if (wmlParagraph.children.length === 0) {
            let wmlBreak = { type: DomType.Break, "break": "textWrapping" };
            let wmlRun = { type: DomType.Run, children: [wmlBreak] };
            wmlParagraph.children = [wmlRun];
        }
        return wmlParagraph;
    }
    parseParagraphProperties(elem, paragraph) {
        this.parseDefaultProperties(elem, paragraph.cssStyle = {}, null, c => {
            if (parseParagraphProperty(c, paragraph, globalXmlParser)) {
                return true;
            }
            switch (c.localName) {
                case "pStyle":
                    paragraph.styleName = globalXmlParser.attr(c, "val");
                    break;
                case "cnfStyle":
                    paragraph.className = values.classNameOfCnfStyle(c);
                    break;
                case "framePr":
                    this.parseFrame(c, paragraph);
                    break;
                case "rPr":
                    break;
                default:
                    return false;
            }
            return true;
        });
    }
    parseFrame(node, paragraph) {
        let dropCap = globalXmlParser.attr(node, "dropCap");
        if (dropCap == "drop")
            paragraph.cssStyle["float"] = "left";
    }
    parseHyperlink(node, parent) {
        let result = { type: DomType.Hyperlink, parent: parent, children: [] };
        let anchor = globalXmlParser.attr(node, "anchor");
        let relId = globalXmlParser.attr(node, "id");
        if (anchor)
            result.href = "#" + anchor;
        if (relId)
            result.id = relId;
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "r":
                    result.children.push(this.parseRun(c, result));
                    break;
            }
        });
        return result;
    }
    parseRun(node, parent) {
        let result = { type: DomType.Run, parent: parent, children: [] };
        xmlUtil.foreach(node, c => {
            c = this.checkAlternateContent(c);
            switch (c.localName) {
                case "t":
                    let textContent = c.textContent;
                    let is_preserve_space = globalXmlParser.attr(c, "xml:space") === "preserve";
                    if (is_preserve_space) {
                        textContent = textContent.split(/\s/).join("\u00A0");
                    }
                    result.children.push({
                        type: DomType.Text,
                        text: textContent
                    });
                    break;
                case "delText":
                    result.children.push({
                        type: DomType.DeletedText,
                        text: c.textContent
                    });
                    break;
                case "commentReference":
                    result.children.push(new WmlCommentReference(globalXmlParser.attr(c, "id")));
                    break;
                case "fldSimple":
                    result.children.push({
                        type: DomType.SimpleField,
                        instruction: globalXmlParser.attr(c, "instr"),
                        lock: globalXmlParser.boolAttr(c, "lock", false),
                        dirty: globalXmlParser.boolAttr(c, "dirty", false)
                    });
                    break;
                case "instrText":
                    result.fieldRun = true;
                    result.children.push({
                        type: DomType.Instruction,
                        text: c.textContent
                    });
                    break;
                case "fldChar":
                    result.fieldRun = true;
                    result.children.push({
                        type: DomType.ComplexField,
                        charType: globalXmlParser.attr(c, "fldCharType"),
                        lock: globalXmlParser.boolAttr(c, "lock", false),
                        dirty: globalXmlParser.boolAttr(c, "dirty", false)
                    });
                    break;
                case "noBreakHyphen":
                    result.children.push({ type: DomType.NoBreakHyphen });
                    break;
                case "br":
                    result.children.push({
                        type: DomType.Break,
                        break: globalXmlParser.attr(c, "type") || "textWrapping",
                        props: {
                            clear: globalXmlParser.attr(c, "clear")
                        }
                    });
                    break;
                case "lastRenderedPageBreak":
                    result.children.push({
                        type: DomType.Break,
                        break: "lastRenderedPageBreak"
                    });
                    break;
                case "sym":
                    result.children.push({
                        type: DomType.Symbol,
                        font: globalXmlParser.attr(c, "font"),
                        char: globalXmlParser.attr(c, "char")
                    });
                    break;
                case "tab":
                    result.children.push({ type: DomType.Tab });
                    break;
                case "footnoteReference":
                    result.children.push({
                        type: DomType.FootnoteReference,
                        id: globalXmlParser.attr(c, "id")
                    });
                    break;
                case "endnoteReference":
                    result.children.push({
                        type: DomType.EndnoteReference,
                        id: globalXmlParser.attr(c, "id")
                    });
                    break;
                case "drawing":
                    let d = this.parseDrawing(c);
                    if (d)
                        result.children = [d];
                    break;
                case "pict":
                    result.children.push(this.parseVmlPicture(c));
                    break;
                case "rPr":
                    this.parseRunProperties(c, result);
                    break;
            }
        });
        return result;
    }
    parseMathElement(elem) {
        const propsTag = `${elem.localName}Pr`;
        const result = { type: mmlTagMap[elem.localName], children: [] };
        for (const el of globalXmlParser.elements(elem)) {
            const childType = mmlTagMap[el.localName];
            if (childType) {
                result.children.push(this.parseMathElement(el));
            }
            else if (el.localName == "r") {
                let run = this.parseRun(el);
                run.type = DomType.MmlRun;
                result.children.push(run);
            }
            else if (el.localName == propsTag) {
                result.props = this.parseMathProperies(el);
            }
        }
        return result;
    }
    parseMathProperies(elem) {
        const result = {};
        for (const el of globalXmlParser.elements(elem)) {
            switch (el.localName) {
                case "chr":
                    result.char = globalXmlParser.attr(el, "val");
                    break;
                case "vertJc":
                    result.verticalJustification = globalXmlParser.attr(el, "val");
                    break;
                case "pos":
                    result.position = globalXmlParser.attr(el, "val");
                    break;
                case "degHide":
                    result.hideDegree = globalXmlParser.boolAttr(el, "val");
                    break;
                case "begChr":
                    result.beginChar = globalXmlParser.attr(el, "val");
                    break;
                case "endChr":
                    result.endChar = globalXmlParser.attr(el, "val");
                    break;
            }
        }
        return result;
    }
    parseRunProperties(elem, run) {
        this.parseDefaultProperties(elem, run.cssStyle = {}, null, c => {
            switch (c.localName) {
                case "rStyle":
                    run.styleName = globalXmlParser.attr(c, "val");
                    break;
                case "vertAlign":
                    run.verticalAlign = values.valueOfVertAlign(c, true);
                    break;
                default:
                    return false;
            }
            return true;
        });
    }
    parseVmlPicture(elem) {
        const result = { type: DomType.VmlPicture, children: [] };
        for (const el of globalXmlParser.elements(elem)) {
            const child = parseVmlElement(el, this);
            child && result.children.push(child);
        }
        return result;
    }
    checkAlternateContent(elem) {
        if (elem.localName != 'AlternateContent') {
            return elem;
        }
        let choice = globalXmlParser.element(elem, "Choice");
        if (choice) {
            let requires = globalXmlParser.attr(choice, "Requires");
            let namespaceURI = elem.lookupNamespaceURI(requires);
            if (supportedNamespaceURIs.includes(namespaceURI)) {
                return choice.firstElementChild;
            }
        }
        return globalXmlParser.element(elem, "Fallback")?.firstElementChild;
    }
    parseDrawing(node) {
        for (let n of globalXmlParser.elements(node)) {
            switch (n.localName) {
                case "inline":
                case "anchor":
                    return this.parseDrawingWrapper(n);
            }
        }
    }
    parseDrawingWrapper(node) {
        let layoutInCell = globalXmlParser.boolAttr(node, "layoutInCell");
        let locked = globalXmlParser.boolAttr(node, "locked");
        let behindDoc = globalXmlParser.boolAttr(node, "behindDoc");
        let allowOverlap = globalXmlParser.boolAttr(node, "allowOverlap");
        let simplePos = globalXmlParser.boolAttr(node, "simplePos");
        let relativeHeight = globalXmlParser.intAttr(node, "relativeHeight", 1);
        let distance = {
            left: globalXmlParser.lengthAttr(node, "distL", LengthUsage.Emu),
            right: globalXmlParser.lengthAttr(node, "distR", LengthUsage.Emu),
            top: globalXmlParser.lengthAttr(node, "distT", LengthUsage.Emu),
            bottom: globalXmlParser.lengthAttr(node, "distB", LengthUsage.Emu),
            distL: globalXmlParser.intAttr(node, "distL", 0),
            distR: globalXmlParser.intAttr(node, "distR", 0),
            distT: globalXmlParser.intAttr(node, "distT", 0),
            distB: globalXmlParser.intAttr(node, "distB", 0),
        };
        let result = {
            type: DomType.Drawing,
            children: [],
            cssStyle: {},
            props: {
                localName: node.localName,
                wrapType: null,
                layoutInCell,
                locked,
                behindDoc,
                allowOverlap,
                simplePos,
                relativeHeight,
                distance,
                extent: {},
            },
        };
        let posX = { relative: "page", align: "left", offset: "0pt", origin: 0, };
        let posY = { relative: "page", align: "top", offset: "0pt", origin: 0, };
        for (let n of globalXmlParser.elements(node)) {
            switch (n.localName) {
                case "simplePos":
                    if (simplePos) {
                        posX.offset = globalXmlParser.lengthAttr(n, "x", LengthUsage.Emu);
                        posY.offset = globalXmlParser.lengthAttr(n, "y", LengthUsage.Emu);
                        posX.origin = globalXmlParser.intAttr(n, "x", 0);
                        posY.origin = globalXmlParser.intAttr(n, "y", 0);
                    }
                    break;
                case "positionH":
                    if (!simplePos) {
                        let alignNode = globalXmlParser.element(n, "align");
                        let offsetNode = globalXmlParser.element(n, "posOffset");
                        posX.relative = globalXmlParser.attr(n, "relativeFrom") ?? posX.relative;
                        if (alignNode) {
                            posX.align = alignNode.textContent;
                        }
                        if (offsetNode) {
                            posX.offset = xmlUtil.sizeValue(offsetNode, LengthUsage.Emu);
                            posX.origin = xmlUtil.parseTextContent(offsetNode);
                        }
                        result.props.posX = posX;
                    }
                    break;
                case "positionV":
                    if (!simplePos) {
                        let alignNode = globalXmlParser.element(n, "align");
                        let offsetNode = globalXmlParser.element(n, "posOffset");
                        posY.relative = globalXmlParser.attr(n, "relativeFrom") ?? posY.relative;
                        if (alignNode) {
                            posY.align = alignNode.textContent;
                        }
                        if (offsetNode) {
                            posY.offset = xmlUtil.sizeValue(offsetNode, LengthUsage.Emu);
                            posY.origin = xmlUtil.parseTextContent(offsetNode);
                        }
                        result.props.posY = posY;
                    }
                    break;
                case "extent":
                    result.props.extent = {
                        width: globalXmlParser.lengthAttr(n, "cx", LengthUsage.Emu),
                        height: globalXmlParser.lengthAttr(n, "cy", LengthUsage.Emu),
                        origin_width: globalXmlParser.intAttr(n, "cx", 0),
                        origin_height: globalXmlParser.intAttr(n, "cy", 0),
                    };
                    break;
                case "effectExtent":
                    result.props.effectExtent = {
                        top: globalXmlParser.lengthAttr(n, "t", LengthUsage.Emu),
                        bottom: globalXmlParser.lengthAttr(n, "b", LengthUsage.Emu),
                        left: globalXmlParser.lengthAttr(n, "l", LengthUsage.Emu),
                        right: globalXmlParser.lengthAttr(n, "r", LengthUsage.Emu),
                        origin_top: globalXmlParser.intAttr(n, "t", 0),
                        origin_bottom: globalXmlParser.intAttr(n, "b", 0),
                        origin_left: globalXmlParser.intAttr(n, "l", 0),
                        origin_right: globalXmlParser.intAttr(n, "r", 0),
                    };
                    break;
                case "graphic":
                    let g = this.parseGraphic(n);
                    if (g) {
                        result.children.push(g);
                    }
                    break;
                case "wrapTopAndBottom":
                    result.props.wrapType = WrapType.TopAndBottom;
                    break;
                case "wrapNone":
                    result.props.wrapType = WrapType.None;
                    break;
                case "wrapSquare":
                    result.props.wrapType = WrapType.Square;
                    result.props.wrapText = globalXmlParser.attr(n, "wrapText");
                    break;
                case "wrapThrough":
                case "wrapTight":
                    result.props.wrapType = WrapType.Tight;
                    result.props.wrapText = globalXmlParser.attr(n, "wrapText");
                    let polygonNode = globalXmlParser.element(n, "wrapPolygon");
                    this.parsePolygon(polygonNode, result);
                    break;
            }
        }
        let { extent, effectExtent } = result.props;
        let real_width = extent.origin_width + effectExtent.origin_left + effectExtent.origin_right;
        let real_height = extent.origin_height + effectExtent.origin_top + effectExtent.origin_bottom;
        result.cssStyle["width"] = convertLength(real_width, LengthUsage.Emu);
        result.cssStyle["height"] = convertLength(real_height, LengthUsage.Emu);
        if (node.localName === "inline") {
            result.props.wrapType = WrapType.Inline;
        }
        if (node.localName === "anchor") {
            result.cssStyle["position"] = "relative";
            if (behindDoc) {
                result.cssStyle["z-index"] = -1;
            }
            else {
                result.cssStyle["z-index"] = relativeHeight;
            }
            if (this.options.ignoreImageWrap) {
                result.props.wrapType = WrapType.TopAndBottom;
            }
            let { wrapText, wrapType, extent } = result.props;
            switch (wrapType) {
                case WrapType.TopAndBottom:
                    result.cssStyle['float'] = 'left';
                    result.cssStyle['width'] = "100%";
                    result.cssStyle['text-align'] = posX.align;
                    result.cssStyle["transform"] = `translate(${posX.offset},0)`;
                    result.cssStyle["margin-top"] = `calc(${posY.offset} - ${distance.top})`;
                    result.cssStyle["shape-outside"] = `inset(calc(${posY.offset} - ${distance.top}) 0 0 0)`;
                    result.cssStyle["box-sizing"] = "content-box";
                    result.cssStyle["padding-top"] = distance.top;
                    result.cssStyle["padding-bottom"] = distance.bottom;
                    break;
                case WrapType.None:
                    result.cssStyle['position'] = 'absolute';
                    switch (posX.align) {
                        case "left":
                        case "right":
                            result.cssStyle[posX.align] = posX.offset;
                            break;
                        case "center":
                            result.cssStyle["left"] = "50%";
                            result.cssStyle["transform"] = "translateX(-50%)";
                    }
                    result.cssStyle["top"] = posY.offset;
                    break;
                case WrapType.Square:
                    result.cssStyle["float"] = wrapText === 'left' ? "right" : "left";
                    result.cssStyle["margin-top"] = `calc(${posY.offset} - ${distance.top})`;
                    result.cssStyle["shape-outside"] = `inset(calc(${posY.offset} - ${distance.top}) 0 0 0)`;
                    switch (wrapText) {
                        case "left":
                            switch (posX.align) {
                                case "left":
                                    result.cssStyle["margin-right"] = `calc(100% - ${extent.width} - ${posX.offset} - ${distance.right})`;
                                    break;
                                case "right":
                                    result.cssStyle["margin-right"] = `calc(${posX.offset} - ${distance.right})`;
                                    break;
                                case "center":
                                    result.cssStyle["margin-right"] = `calc( 50% - (${extent.width} - ${posX.offset}) / 2 - ${distance.right} )`;
                            }
                            break;
                        case "right":
                            switch (posX.align) {
                                case "left":
                                    result.cssStyle["margin-left"] = `calc(${posX.offset} - ${distance.left})`;
                                    break;
                                case "right":
                                    result.cssStyle["margin-left"] = `calc(100% - ${extent.width} - ${posX.offset} - ${distance.left})`;
                                    result.cssStyle["margin-right"] = `calc(${posX.offset} - ${distance.right})`;
                                    break;
                                case "center":
                                    result.cssStyle["margin-left"] = `calc( 50% - (${extent.width} - ${posX.offset} ) / 2 - ${distance.left} )`;
                            }
                            break;
                        default:
                            console.warn(`text wrap picture on ${wrapText} is not supported！`);
                            break;
                    }
                    result.cssStyle["box-sizing"] = "content-box";
                    result.cssStyle["padding-top"] = distance.top;
                    result.cssStyle["padding-bottom"] = distance.bottom;
                    result.cssStyle["padding-left"] = distance.left;
                    result.cssStyle["padding-right"] = distance.right;
                    break;
                case WrapType.Through:
                case WrapType.Tight:
                    result.cssStyle["float"] = wrapText === 'left' ? "right" : "left";
                    let { polygonData } = result.props;
                    result.cssStyle["shape-outside"] = `polygon(${polygonData})`;
                    result.cssStyle["margin-top"] = posY.offset;
                    switch (wrapText) {
                        case "left":
                            switch (posX.align) {
                                case "left":
                                    result.cssStyle["margin-right"] = `calc(100% - ${extent.width} - ${posX.offset})`;
                                    break;
                                case "right":
                                    result.cssStyle["margin-right"] = posX.offset;
                                    break;
                                case "center":
                                    result.cssStyle["margin-right"] = `calc( 50% - (${extent.width} - ${posX.offset}) / 2 )`;
                            }
                            break;
                        case "right":
                            switch (posX.align) {
                                case "left":
                                    result.cssStyle["margin-left"] = posX.offset;
                                    break;
                                case "right":
                                    result.cssStyle["margin-left"] = `calc(100% - ${extent.width} - ${posX.offset})`;
                                    break;
                                case "center":
                                    result.cssStyle["margin-left"] = `calc( 50% - (${extent.width} - ${posX.offset} ) / 2 )`;
                            }
                            break;
                        default:
                            console.warn(`text wrap picture on ${wrapText} is not supported！`);
                            break;
                    }
                    break;
            }
        }
        return result;
    }
    parsePolygon(node, target) {
        let polygon = [];
        let { wrapText, distance, extent, posX, posY } = target.props;
        xmlUtil.foreach(node, (elem) => {
            let origin_x = globalXmlParser.intAttr(elem, 'x', 0);
            let origin_y = globalXmlParser.intAttr(elem, 'y', 0);
            let real_x, real_y;
            let point_x, point_y;
            let revise_x, revise_y;
            switch (wrapText) {
                case "left":
                    switch (posX.align) {
                        case "left":
                            real_x = origin_x * extent.origin_width / 21600 - distance.distL;
                            real_y = origin_y * extent.origin_height / 21600 + posY.origin;
                            revise_x = convertLength(real_x, LengthUsage.Emu) ?? "0pt";
                            revise_y = convertLength(real_y, LengthUsage.Emu) ?? "0pt";
                            break;
                        case "right":
                            real_x = origin_x * extent.origin_width / 21600 + posX.origin - distance.distL;
                            real_y = origin_y * extent.origin_height / 21600 + posY.origin;
                            revise_x = convertLength(real_x, LengthUsage.Emu) ?? "0pt";
                            revise_y = convertLength(real_y, LengthUsage.Emu) ?? "0pt";
                            break;
                        case "center":
                            real_x = origin_x * extent.origin_width / 21600 + posX.origin - distance.distL;
                            real_y = origin_y * extent.origin_height / 21600 + posY.origin;
                            revise_x = convertLength(real_x, LengthUsage.Emu) ?? "0pt";
                            revise_y = convertLength(real_y, LengthUsage.Emu) ?? "0pt";
                    }
                    break;
                case "right":
                    switch (posX.align) {
                        case "left":
                            real_x = origin_x * extent.origin_width / 21600 + posX.origin + distance.distR;
                            real_y = origin_y * extent.origin_height / 21600 + posY.origin;
                            revise_x = convertLength(real_x, LengthUsage.Emu) ?? "0pt";
                            revise_y = convertLength(real_y, LengthUsage.Emu) ?? "0pt";
                            break;
                        case "right":
                            real_x = origin_x * extent.origin_width / 21600 + posX.origin + distance.distR;
                            real_y = origin_y * extent.origin_height / 21600 + posY.origin;
                            point_x = convertLength(real_x, LengthUsage.Emu) ?? "0pt";
                            point_y = convertLength(real_y, LengthUsage.Emu) ?? "0pt";
                            revise_x = `calc(100% + ${point_x} - ${extent.width})`;
                            revise_y = point_y;
                            break;
                        case "center":
                            real_x = origin_x * extent.origin_width / 21600 + posX.origin + distance.distR;
                            real_y = origin_y * extent.origin_height / 21600 + posY.origin;
                            point_x = convertLength(real_x, LengthUsage.Emu) ?? "0pt";
                            point_y = convertLength(real_y, LengthUsage.Emu) ?? "0pt";
                            revise_x = `calc(50% + ${point_x})`;
                            revise_y = point_y;
                    }
                    break;
                default:
                    console.warn(`text wrap picture on ${wrapText} is not supported！`);
                    break;
            }
            let point = `${revise_x} ${revise_y}`;
            polygon.push(point);
        });
        target.props.polygonData = polygon.join(',');
    }
    parseGraphic(elem) {
        let graphicData = globalXmlParser.element(elem, "graphicData");
        for (let n of globalXmlParser.elements(graphicData)) {
            switch (n.localName) {
                case "wsp":
                    return this.parseShape(n);
                case "pic":
                    return this.parsePicture(n);
            }
        }
        return null;
    }
    parseShape(node) {
        let shape = { type: DomType.Shape, cssStyle: {} };
        for (let n of globalXmlParser.elements(node)) {
            switch (n.localName) {
                case "cNvPr":
                case "cNvSpPr":
                case "cNvCnPr":
                case "spPr":
                    return this.parseShapeProperties(n, shape);
            }
        }
        return null;
    }
    parseShapeProperties(node, target) {
        for (let n of globalXmlParser.elements(node)) {
            switch (n.localName) {
                case "xfrm":
                    let flipH = globalXmlParser.boolAttr(n, "flipH");
                    if (flipH) {
                        target.props.is_transform = true;
                        target.props.transform.scaleX = -1;
                    }
                    let flipV = globalXmlParser.boolAttr(n, "flipV");
                    if (flipV) {
                        target.props.is_transform = true;
                        target.props.transform.scaleY = -1;
                    }
                    let degree = globalXmlParser.numberAttr(n, "rot", LengthUsage.degree, 0);
                    if (degree) {
                        target.props.is_transform = true;
                        target.props.transform.rotate = degree;
                    }
                    this.parseTransform2D(n, target);
                    break;
            }
        }
        return null;
    }
    parsePicture(elem) {
        let result = {
            type: DomType.Image,
            src: "",
            cssStyle: {},
            props: {
                is_clip: false,
                clip: {},
                is_transform: false,
                transform: {},
            }
        };
        for (let n of globalXmlParser.elements(elem)) {
            switch (n.localName) {
                case "nvPicPr":
                    break;
                case "blipFill":
                    this.parseBlipFill(n, result);
                    break;
                case "spPr":
                    this.parseShapeProperties(n, result);
                    break;
            }
        }
        return result;
    }
    parseTransform2D(node, target) {
        for (let n of globalXmlParser.elements(node)) {
            switch (n.localName) {
                case "ext":
                    let { transform } = target.props;
                    let origin_width = globalXmlParser.intAttr(n, "cx", 0);
                    let origin_height = globalXmlParser.intAttr(n, "cy", 0);
                    let width;
                    let height;
                    if (transform?.rotate) {
                        let angel = Math.PI * transform.rotate / 180;
                        width = Math.abs(origin_width * Math.cos(angel) + origin_height * Math.sin(angel));
                        height = Math.abs(origin_width * Math.sin(angel) + origin_height * Math.cos(angel));
                    }
                    else {
                        width = origin_width;
                        height = origin_height;
                    }
                    target.props.width = convertLength(width, LengthUsage.Px, false);
                    target.props.height = convertLength(height, LengthUsage.Px, false);
                    target.cssStyle["width"] = convertLength(width, LengthUsage.Emu, true);
                    target.cssStyle["height"] = convertLength(height, LengthUsage.Emu, true);
                    break;
                case "off":
                    target.cssStyle["left"] = globalXmlParser.lengthAttr(n, "x", LengthUsage.Emu);
                    target.cssStyle["top"] = globalXmlParser.lengthAttr(n, "y", LengthUsage.Emu);
                    break;
            }
        }
    }
    parseBlipFill(node, target) {
        for (let n of globalXmlParser.elements(node)) {
            switch (n.localName) {
                case "blip":
                    target.src = globalXmlParser.attr(n, "embed");
                    this.parseBlip(n, target);
                    break;
                case "srcRect":
                    let left = globalXmlParser.numberAttr(n, "l", LengthUsage.RelativeRect, 0);
                    let right = globalXmlParser.numberAttr(n, "r", LengthUsage.RelativeRect, 0);
                    let top = globalXmlParser.numberAttr(n, "t", LengthUsage.RelativeRect, 0);
                    let bottom = globalXmlParser.numberAttr(n, "b", LengthUsage.RelativeRect, 0);
                    target.props.is_clip = [left, right, top, bottom].some((item) => item !== 0);
                    target.props.clip.type = 'inset';
                    target.props.clip.path = { top, right, bottom, left };
                    break;
            }
        }
    }
    parseBlip(node, target) {
        for (let n of globalXmlParser.elements(node)) {
            switch (n.localName) {
                case "alphaBiLevel":
                    break;
                case "alphaCeiling":
                    break;
                case "alphaFloor":
                    break;
                case "alphaInv":
                    break;
                case "alphaMod":
                    break;
                case "alphaModFix":
                    let opacity = globalXmlParser.lengthAttr(n, 'amt', LengthUsage.Opacity);
                    target.cssStyle["opacity"] = opacity;
                    break;
                default:
                    if (this.options.debug)
                        console.warn(`DOCX: Unknown document element: ${n.localName}`);
                    break;
            }
        }
    }
    parseTable(node) {
        let result = { type: DomType.Table, children: [] };
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "tblPr":
                    this.parseTableProperties(c, result);
                    break;
                case "tblGrid":
                    result.columns = this.parseTableColumns(c);
                    break;
                case "tr":
                    result.children.push(this.parseTableRow(c));
                    break;
            }
        });
        return result;
    }
    parseTableColumns(node) {
        let result = [];
        xmlUtil.foreach(node, n => {
            switch (n.localName) {
                case "gridCol":
                    result.push({ width: globalXmlParser.lengthAttr(n, "w") });
                    break;
            }
        });
        return result;
    }
    parseTableProperties(elem, table) {
        table.cssStyle = {};
        table.cellStyle = {};
        this.parseDefaultProperties(elem, table.cssStyle, table.cellStyle, c => {
            switch (c.localName) {
                case "tblStyle":
                    table.styleName = globalXmlParser.attr(c, "val");
                    break;
                case "tblLook":
                    table.className = values.classNameOftblLook(c);
                    break;
                case "tblpPr":
                    this.parseTablePosition(c, table);
                    break;
                case "tblStyleColBandSize":
                    table.colBandSize = globalXmlParser.intAttr(c, "val");
                    break;
                case "tblStyleRowBandSize":
                    table.rowBandSize = globalXmlParser.intAttr(c, "val");
                    break;
                default:
                    return false;
            }
            return true;
        });
        switch (table.cssStyle["text-align"]) {
            case "center":
                delete table.cssStyle["text-align"];
                table.cssStyle["margin-left"] = "auto";
                table.cssStyle["margin-right"] = "auto";
                break;
            case "right":
                delete table.cssStyle["text-align"];
                table.cssStyle["margin-left"] = "auto";
                break;
        }
    }
    parseTablePosition(node, table) {
        if (this.options.ignoreTableWrap) {
            return false;
        }
        let topFromText = globalXmlParser.lengthAttr(node, "topFromText");
        let bottomFromText = globalXmlParser.lengthAttr(node, "bottomFromText");
        let rightFromText = globalXmlParser.lengthAttr(node, "rightFromText");
        let leftFromText = globalXmlParser.lengthAttr(node, "leftFromText");
        table.cssStyle["float"] = 'left';
        table.cssStyle["margin-bottom"] = values.addSize(table.cssStyle["margin-bottom"], bottomFromText);
        table.cssStyle["margin-left"] = values.addSize(table.cssStyle["margin-left"], leftFromText);
        table.cssStyle["margin-right"] = values.addSize(table.cssStyle["margin-right"], rightFromText);
        table.cssStyle["margin-top"] = values.addSize(table.cssStyle["margin-top"], topFromText);
    }
    parseTableRow(node) {
        let result = { type: DomType.Row, children: [] };
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "tc":
                    result.children.push(this.parseTableCell(c));
                    break;
                case "trPr":
                    this.parseTableRowProperties(c, result);
                    break;
            }
        });
        return result;
    }
    parseTableRowProperties(elem, row) {
        row.cssStyle = this.parseDefaultProperties(elem, {}, null, c => {
            switch (c.localName) {
                case "cnfStyle":
                    row.className = values.classNameOfCnfStyle(c);
                    break;
                case "tblHeader":
                    row.isHeader = globalXmlParser.boolAttr(c, "val", true);
                    break;
                default:
                    return false;
            }
            return true;
        });
    }
    parseTableCell(node) {
        let result = { type: DomType.Cell, children: [] };
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "tbl":
                    result.children.push(this.parseTable(c));
                    break;
                case "p":
                    result.children.push(this.parseParagraph(c));
                    break;
                case "tcPr":
                    this.parseTableCellProperties(c, result);
                    break;
            }
        });
        return result;
    }
    parseTableCellProperties(elem, cell) {
        cell.cssStyle = this.parseDefaultProperties(elem, {}, null, c => {
            switch (c.localName) {
                case "gridSpan":
                    cell.span = globalXmlParser.intAttr(c, "val", null);
                    break;
                case "vMerge":
                    cell.verticalMerge = globalXmlParser.attr(c, "val") ?? "continue";
                    break;
                case "cnfStyle":
                    cell.className = values.classNameOfCnfStyle(c);
                    break;
                default:
                    return false;
            }
            return true;
        });
    }
    parseDefaultProperties(elem, style = null, childStyle = null, handler = null) {
        style = style || {};
        xmlUtil.foreach(elem, c => {
            if (handler?.(c))
                return;
            switch (c.localName) {
                case "b":
                    style["font-weight"] = globalXmlParser.boolAttr(c, "val", true) ? "bold" : "normal";
                    break;
                case "bCs":
                case "bdr":
                    style["border"] = values.valueOfBorder(c);
                    break;
                case "caps":
                    style["text-transform"] = globalXmlParser.boolAttr(c, "val", true) ? "uppercase" : "none";
                    break;
                case "color":
                    style["color"] = xmlUtil.colorAttr(c, "val", null, autos.color);
                    break;
                case "cs":
                case "dstrike":
                case "eastAsianLayout":
                case "effect":
                case "em":
                case "emboss":
                case "fitText":
                case "highlight":
                    style["background-color"] = xmlUtil.colorAttr(c, "val", null, autos.highlight);
                    break;
                case "i":
                    style["font-style"] = globalXmlParser.boolAttr(c, "val", true) ? "italic" : "normal";
                    break;
                case "iCs":
                case "imprint":
                case "kern":
                    break;
                case "lang":
                    style["$lang"] = globalXmlParser.attr(c, "val");
                    break;
                case "noProof":
                case "outline":
                case "position":
                    style.verticalAlign = globalXmlParser.lengthAttr(c, "val", LengthUsage.FontSize);
                    break;
                case "rFonts":
                    this.parseFont(c, style);
                    break;
                case "rPrChange":
                case "rtl":
                case "shadow":
                case "shd":
                    style["background-color"] = xmlUtil.colorAttr(c, "fill", null, autos.shd);
                    break;
                case "smallCaps":
                    style["font-variant"] = globalXmlParser.boolAttr(c, "val", true) ? "small-caps" : "none";
                    break;
                case "snapToGrid":
                case "spacing":
                    if (elem.localName == "pPr")
                        this.parseSpacing(c, style);
                    break;
                case "specVanish":
                case "strike":
                    style["text-decoration"] = globalXmlParser.boolAttr(c, "val", true) ? "line-through" : "none";
                    break;
                case "sz":
                    style["font-size"] = style["min-height"] = globalXmlParser.lengthAttr(c, "val", LengthUsage.FontSize);
                    break;
                case "szCs":
                case "u":
                    this.parseUnderline(c, style);
                    break;
                case "vanish":
                    if (globalXmlParser.boolAttr(c, "val", true))
                        style["display"] = "none";
                    break;
                case "vertAlign":
                    break;
                case "w":
                case "webHidden":
                case "jc":
                    style["text-align"] = values.valueOfJc(c);
                    break;
                case "textAlignment":
                    style["vertical-align"] = values.valueOfTextAlignment(c);
                    break;
                case "tcW":
                    if (this.options.ignoreWidth) ;
                    break;
                case "tblW":
                    style["width"] = values.valueOfSize(c, "w");
                    break;
                case "trHeight":
                    this.parseTrHeight(c, style);
                    break;
                case "ind":
                case "tblInd":
                    this.parseIndentation(c, style);
                    break;
                case "tblBorders":
                    this.parseBorderProperties(c, childStyle || style);
                    break;
                case "tblCellSpacing":
                    style["border-spacing"] = values.valueOfMargin(c);
                    style["border-collapse"] = "separate";
                    break;
                case "pBdr":
                    this.parseBorderProperties(c, style);
                    break;
                case "tcBorders":
                    this.parseBorderProperties(c, style);
                    break;
                case "noWrap":
                    break;
                case "tblCellMar":
                case "tcMar":
                    this.parseMarginProperties(c, childStyle || style);
                    break;
                case "tblLayout":
                    style["table-layout"] = values.valueOfTblLayout(c);
                    break;
                case "vAlign":
                    style["vertical-align"] = values.valueOfTextAlignment(c);
                    break;
                case "wordWrap":
                    if (globalXmlParser.boolAttr(c, "val"))
                        style["overflow-wrap"] = "break-word";
                    break;
                case "suppressAutoHyphens":
                    style["hyphens"] = globalXmlParser.boolAttr(c, "val", true) ? "none" : "auto";
                    break;
                case "tabs":
                case "outlineLvl":
                case "contextualSpacing":
                case "tblStyleColBandSize":
                case "tblStyleRowBandSize":
                case "pageBreakBefore":
                case "suppressLineNumbers":
                case "keepLines":
                case "keepNext":
                case "widowControl":
                case "bidi":
                default:
                    if (this.options.debug)
                        console.warn(`DOCX: Unknown document element: ${elem.localName}.${c.localName}`);
                    break;
            }
        });
        return style;
    }
    parseUnderline(node, style) {
        let val = globalXmlParser.attr(node, "val");
        if (val == null)
            return;
        switch (val) {
            case "dash":
            case "dashDotDotHeavy":
            case "dashDotHeavy":
            case "dashedHeavy":
            case "dashLong":
            case "dashLongHeavy":
            case "dotDash":
            case "dotDotDash":
                style["text-decoration"] = "underline dashed";
                break;
            case "dotted":
            case "dottedHeavy":
                style["text-decoration"] = "underline dotted";
                break;
            case "double":
                style["text-decoration"] = "underline double";
                break;
            case "single":
            case "thick":
                style["text-decoration"] = "underline";
                break;
            case "wave":
            case "wavyDouble":
            case "wavyHeavy":
                style["text-decoration"] = "underline wavy";
                break;
            case "words":
                style["text-decoration"] = "underline";
                break;
            case "none":
                style["text-decoration"] = "none";
                break;
        }
        let col = xmlUtil.colorAttr(node, "color");
        if (col)
            style["text-decoration-color"] = col;
    }
    parseFont(node, style) {
        let fonts = [];
        let ascii = globalXmlParser.attr(node, "ascii");
        let ascii_theme = values.themeValue(node, "asciiTheme");
        fonts.push(ascii, ascii_theme);
        let east_Asia = globalXmlParser.attr(node, "eastAsia");
        let east_Asia_theme = values.themeValue(node, "eastAsiaTheme");
        fonts.push(east_Asia, east_Asia_theme);
        let complex_script = globalXmlParser.attr(node, "cs");
        let complex_script_theme = values.themeValue(node, "cstheme");
        fonts.push(complex_script, complex_script_theme);
        let high_ansi = globalXmlParser.attr(node, "hAnsi");
        let high_ansi_theme = values.themeValue(node, "hAnsiTheme");
        fonts.push(high_ansi, high_ansi_theme);
        let fonts_value = [...new Set(fonts)].filter(x => x).join(', ');
        if (fonts.length > 0) {
            style["font-family"] = fonts_value;
        }
        style["_hint"] = globalXmlParser.attr(node, "hint");
    }
    parseIndentation(node, style) {
        let firstLine = globalXmlParser.lengthAttr(node, "firstLine");
        let hanging = globalXmlParser.lengthAttr(node, "hanging");
        let left = globalXmlParser.lengthAttr(node, "left");
        let start = globalXmlParser.lengthAttr(node, "start");
        let right = globalXmlParser.lengthAttr(node, "right");
        let end = globalXmlParser.lengthAttr(node, "end");
        if (firstLine)
            style["text-indent"] = firstLine;
        if (hanging)
            style["text-indent"] = `-${hanging}`;
        if (left || start)
            style["padding-left"] = left || start;
        if (right || end)
            style["padding-right"] = right || end;
    }
    parseSpacing(node, style) {
        let before = globalXmlParser.lengthAttr(node, "before");
        let after = globalXmlParser.lengthAttr(node, "after");
        let line = globalXmlParser.intAttr(node, "line", null);
        let lineRule = globalXmlParser.attr(node, "lineRule");
        if (before)
            style["margin-top"] = before;
        if (after)
            style["margin-bottom"] = after;
        if (line !== null) {
            switch (lineRule) {
                case "auto":
                    style["line-height"] = `${(line / 240).toFixed(2)}`;
                    break;
                case "atLeast":
                    style["line-height"] = `calc(100% + ${line / 20}pt)`;
                    break;
                case "Exact":
                    style["line-height"] = `${line / 20}pt`;
                    break;
                default:
                    style["line-height"] = style["min-height"] = `${line / 20}pt`;
                    break;
            }
        }
    }
    parseMarginProperties(node, output) {
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "left":
                    output["padding-left"] = values.valueOfMargin(c);
                    break;
                case "right":
                    output["padding-right"] = values.valueOfMargin(c);
                    break;
                case "top":
                    output["padding-top"] = values.valueOfMargin(c);
                    break;
                case "bottom":
                    output["padding-bottom"] = values.valueOfMargin(c);
                    break;
            }
        });
    }
    parseTrHeight(node, output) {
        switch (globalXmlParser.attr(node, "hRule")) {
            case "exact":
                output["height"] = globalXmlParser.lengthAttr(node, "val");
                break;
            case "atLeast":
            default:
                output["height"] = globalXmlParser.lengthAttr(node, "val");
                break;
        }
    }
    parseBorderProperties(node, output) {
        xmlUtil.foreach(node, c => {
            switch (c.localName) {
                case "start":
                case "left":
                    output["border-left"] = values.valueOfBorder(c);
                    break;
                case "end":
                case "right":
                    output["border-right"] = values.valueOfBorder(c);
                    break;
                case "top":
                    output["border-top"] = values.valueOfBorder(c);
                    break;
                case "bottom":
                    output["border-bottom"] = values.valueOfBorder(c);
                    break;
            }
        });
    }
}
const knownColors = ['black', 'blue', 'cyan', 'darkBlue', 'darkCyan', 'darkGray', 'darkGreen', 'darkMagenta', 'darkRed', 'darkYellow', 'green', 'lightGray', 'magenta', 'none', 'red', 'white', 'yellow'];
class xmlUtil {
    static foreach(node, cb) {
        for (let i = 0; i < node.childNodes.length; i++) {
            let n = node.childNodes[i];
            if (n.nodeType == Node.ELEMENT_NODE) {
                cb(n);
            }
        }
    }
    static colorAttr(node, attrName, defValue = null, autoColor = 'black') {
        let v = globalXmlParser.attr(node, attrName);
        if (v) {
            if (v == "auto") {
                return autoColor;
            }
            else if (knownColors.includes(v)) {
                return v;
            }
            return `#${v}`;
        }
        let themeColor = globalXmlParser.attr(node, "themeColor");
        return themeColor ? `var(--docx-${themeColor}-color)` : defValue;
    }
    static sizeValue(node, type = LengthUsage.Dxa) {
        return convertLength(node.textContent, type);
    }
    static parseTextContent(node, defaultValue = 0) {
        let textContent = node.textContent;
        return textContent ? parseInt(textContent) : defaultValue;
    }
}
class values {
    static themeValue(c, attr) {
        let val = globalXmlParser.attr(c, attr);
        return val ? `var(--docx-${val}-font)` : null;
    }
    static valueOfSize(c, attr) {
        let type = LengthUsage.Dxa;
        switch (globalXmlParser.attr(c, "type")) {
            case "dxa":
                break;
            case "pct":
                type = LengthUsage.TablePercent;
                break;
            case "auto":
                return "auto";
        }
        return globalXmlParser.lengthAttr(c, attr, type);
    }
    static valueOfMargin(c) {
        return globalXmlParser.lengthAttr(c, "w");
    }
    static valueOfBorder(c) {
        let type = globalXmlParser.attr(c, "val");
        if (type == "nil")
            return "none";
        let color = xmlUtil.colorAttr(c, "color");
        let size = globalXmlParser.lengthAttr(c, "sz", LengthUsage.Border);
        return `${size} solid ${color == "auto" ? autos.borderColor : color}`;
    }
    static valueOfTblLayout(c) {
        let type = globalXmlParser.attr(c, "type");
        return type == "fixed" ? "fixed" : "auto";
    }
    static classNameOfCnfStyle(c) {
        const val = globalXmlParser.attr(c, "val");
        const classes = [
            'first-row', 'last-row', 'first-col', 'last-col',
            'odd-col', 'even-col', 'odd-row', 'even-row',
            'ne-cell', 'nw-cell', 'se-cell', 'sw-cell'
        ];
        return classes.filter((_, i) => val[i] == '1').join(' ');
    }
    static valueOfJc(c) {
        let type = globalXmlParser.attr(c, "val");
        switch (type) {
            case "start":
            case "left":
                return "left";
            case "center":
                return "center";
            case "end":
            case "right":
                return "right";
            case "both":
                return "justify";
        }
        return type;
    }
    static valueOfVertAlign(c, asTagName = false) {
        let type = globalXmlParser.attr(c, "val");
        switch (type) {
            case "subscript":
                return "sub";
            case "superscript":
                return asTagName ? "sup" : "super";
        }
        return asTagName ? null : type;
    }
    static valueOfTextAlignment(c) {
        let type = globalXmlParser.attr(c, "val");
        switch (type) {
            case "auto":
            case "baseline":
                return "baseline";
            case "top":
                return "top";
            case "center":
                return "middle";
            case "bottom":
                return "bottom";
        }
        return type;
    }
    static addSize(a, b) {
        if (a == null)
            return b;
        if (b == null)
            return a;
        return `calc(${a} + ${b})`;
    }
    static classNameOftblLook(c) {
        const val = globalXmlParser.hexAttr(c, "val", 0);
        let className = "";
        if (globalXmlParser.boolAttr(c, "firstRow") || (val & 0x0020))
            className += " first-row";
        if (globalXmlParser.boolAttr(c, "lastRow") || (val & 0x0040))
            className += " last-row";
        if (globalXmlParser.boolAttr(c, "firstColumn") || (val & 0x0080))
            className += " first-col";
        if (globalXmlParser.boolAttr(c, "lastColumn") || (val & 0x0100))
            className += " last-col";
        if (globalXmlParser.boolAttr(c, "noHBand") || (val & 0x0200))
            className += " no-hband";
        if (globalXmlParser.boolAttr(c, "noVBand") || (val & 0x0400))
            className += " no-vband";
        return className.trim();
    }
}

const defaultTab = { pos: 0, leader: "none", style: "left" };
const maxTabs = 50;
function computePixelToPoint(container = document.body) {
    const temp = document.createElement("div");
    temp.style.width = '100pt';
    container.appendChild(temp);
    const result = 100 / temp.offsetWidth;
    container.removeChild(temp);
    return result;
}
function updateTabStop(elem, tabs, defaultTabSize, pixelToPoint = 72 / 96) {
    const p = elem.closest("p");
    const ebb = elem.getBoundingClientRect();
    const pbb = p.getBoundingClientRect();
    const pcs = getComputedStyle(p);
    const tabStops = tabs?.length > 0 ? tabs.map(t => ({
        pos: lengthToPoint(t.position),
        leader: t.leader,
        style: t.style
    })).sort((a, b) => a.pos - b.pos) : [defaultTab];
    const lastTab = tabStops[tabStops.length - 1];
    const pWidthPt = pbb.width * pixelToPoint;
    const size = lengthToPoint(defaultTabSize);
    let pos = lastTab.pos + size;
    if (pos < pWidthPt) {
        for (; pos < pWidthPt && tabStops.length < maxTabs; pos += size) {
            tabStops.push({ ...defaultTab, pos: pos });
        }
    }
    const marginLeft = parseFloat(pcs.marginLeft);
    const pOffset = pbb.left + marginLeft;
    const left = (ebb.left - pOffset) * pixelToPoint;
    const tab = tabStops.find(t => t.style != "clear" && t.pos > left);
    if (tab == null)
        return;
    let width = 1;
    if (tab.style == "right" || tab.style == "center") {
        const tabStops = Array.from(p.querySelectorAll(`.${elem.className}`));
        const nextIdx = tabStops.indexOf(elem) + 1;
        const range = document.createRange();
        range.setStart(elem, 1);
        if (nextIdx < tabStops.length) {
            range.setEndBefore(tabStops[nextIdx]);
        }
        else {
            range.setEndAfter(p);
        }
        const mul = tab.style == "center" ? 0.5 : 1;
        const nextBB = range.getBoundingClientRect();
        const offset = nextBB.left + mul * nextBB.width - (pbb.left - marginLeft);
        width = tab.pos - offset * pixelToPoint;
    }
    else {
        width = tab.pos - left;
    }
    elem.innerHTML = "&nbsp;";
    elem.style.textDecoration = "inherit";
    elem.style.wordSpacing = `${width.toFixed(0)}pt`;
    switch (tab.leader) {
        case "dot":
        case "middleDot":
            elem.style.textDecoration = "underline";
            elem.style.textDecorationStyle = "dotted";
            break;
        case "hyphen":
        case "heavy":
        case "underscore":
            elem.style.textDecoration = "underline";
            break;
    }
}
function lengthToPoint(length) {
    return parseFloat(length);
}

class Page {
    constructor({ sectProps, elements = [], isSplit = false, isFirstPage = false, isLastPage = false, breakIndex = 0, contentElement, checkingOverflow = false, }) {
        this.pageId = uuid();
        this.sectProps = sectProps;
        this.elements = elements;
        this.isSplit = isSplit;
        this.isFirstPage = isFirstPage;
        this.isLastPage = isLastPage;
        this.breakIndex = breakIndex;
        this.contentElement = contentElement;
        this.checkingOverflow = checkingOverflow;
    }
}

const ns$1 = {
    html: 'http://www.w3.org/1999/xhtml',
    svg: 'http://www.w3.org/2000/svg',
    mathML: 'http://www.w3.org/1998/Math/MathML',
};
var Overflow$1;
(function (Overflow) {
    Overflow["TRUE"] = "true";
    Overflow["FALSE"] = "false";
    Overflow["UNKNOWN"] = "undetected";
})(Overflow$1 || (Overflow$1 = {}));
class HtmlRenderer {
    constructor() {
        this.className = "docx";
        this.styleMap = {};
        this.currentPart = null;
        this.tableVerticalMerges = [];
        this.currentVerticalMerge = null;
        this.tableCellPositions = [];
        this.currentCellPosition = null;
        this.footnoteMap = {};
        this.endnoteMap = {};
        this.currentEndnoteIds = [];
        this.usedHederFooterParts = [];
        this.currentTabs = [];
        this.tabsTimeout = 0;
    }
    render(document, bodyContainer, styleContainer = null, options) {
        this.document = document;
        this.options = options;
        this.className = options.className;
        this.rootSelector = options.inWrapper ? `.${this.className}-wrapper` : ':root';
        this.styleMap = null;
        this.wrapper = bodyContainer;
        styleContainer = styleContainer || bodyContainer;
        removeAllElements$1(styleContainer);
        removeAllElements$1(bodyContainer);
        appendComment$1(styleContainer, "docxjs library predefined styles");
        styleContainer.appendChild(this.renderDefaultStyle());
        if (document.themePart) {
            appendComment$1(styleContainer, "docxjs document theme values");
            this.renderTheme(document.themePart, styleContainer);
        }
        if (document.stylesPart != null) {
            this.styleMap = this.processStyles(document.stylesPart.styles);
            appendComment$1(styleContainer, "docxjs document styles");
            styleContainer.appendChild(this.renderStyles(document.stylesPart.styles));
        }
        if (document.numberingPart) {
            this.processNumberings(document.numberingPart.domNumberings);
            appendComment$1(styleContainer, "docxjs document numbering styles");
            styleContainer.appendChild(this.renderNumbering(document.numberingPart.domNumberings, styleContainer));
        }
        if (!options.ignoreFonts && document.fontTablePart) {
            this.renderFontTable(document.fontTablePart, styleContainer);
        }
        if (document.footnotesPart) {
            this.footnoteMap = keyBy(document.footnotesPart.notes, x => x.id);
        }
        if (document.endnotesPart) {
            this.endnoteMap = keyBy(document.endnotesPart.notes, x => x.id);
        }
        if (document.settingsPart) {
            this.defaultTabSize = document.settingsPart.settings?.defaultTabStop;
        }
        let pageElements = this.renderPages(document.documentPart.body);
        if (this.options.inWrapper) {
            bodyContainer.appendChild(this.renderWrapper(pageElements));
        }
        else {
            appendChildren$1(bodyContainer, pageElements);
        }
        this.refreshTabStops();
    }
    renderDefaultStyle() {
        let c = this.className;
        let styleText = `
			.${c}-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; } 
			.${c}-wrapper>section.${c} { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }
			.${c} { color: black; hyphens: auto; text-underline-position: from-font; }
			section.${c} { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }
            section.${c}>header { position: absolute; top: 0; z-index: 1; display: flex; align-items: flex-end; }
			section.${c}>article { z-index: 1; }
			section.${c}>footer { position: absolute; bottom: 0; z-index: 1; }
			.${c} table { border-collapse: collapse; }
			.${c} table td, .${c} table th { vertical-align: top; }
			.${c} p { margin: 0pt; min-height: 1em; }
			.${c} span { white-space: pre-wrap; overflow-wrap: break-word; }
			.${c} a { color: inherit; text-decoration: inherit; }
			.${c} img, ${c} svg { vertical-align: baseline; }
			.${c} .clearfix::after { content: ""; display: block; line-height: 0; clear: both; }
		`;
        return createStyleElement$1(styleText);
    }
    renderTheme(themePart, styleContainer) {
        const variables = {};
        const fontScheme = themePart.theme?.fontScheme;
        if (fontScheme) {
            if (fontScheme.majorFont) {
                variables['--docx-majorHAnsi-font'] = fontScheme.majorFont.latinTypeface;
            }
            if (fontScheme.minorFont) {
                variables['--docx-minorHAnsi-font'] = fontScheme.minorFont.latinTypeface;
            }
        }
        const colorScheme = themePart.theme?.colorScheme;
        if (colorScheme) {
            for (let [k, v] of Object.entries(colorScheme.colors)) {
                variables[`--docx-${k}-color`] = `#${v}`;
            }
        }
        const cssText = this.styleToString(`.${this.className}`, variables);
        styleContainer.appendChild(createStyleElement$1(cssText));
    }
    processStyleName(className) {
        return className ? `${this.className}_${escapeClassName(className)}` : this.className;
    }
    processStyles(styles) {
        const stylesMap = keyBy(styles.filter(x => x.id != null), x => x.id);
        for (const style of styles.filter(x => x.basedOn)) {
            let baseStyle = stylesMap[style.basedOn];
            if (baseStyle) {
                style.paragraphProps = mergeDeep(style.paragraphProps, baseStyle.paragraphProps);
                style.runProps = mergeDeep(style.runProps, baseStyle.runProps);
                for (const baseValues of baseStyle.styles) {
                    const styleValues = style.styles.find(x => x.target == baseValues.target);
                    if (styleValues) {
                        this.copyStyleProperties(baseValues.values, styleValues.values);
                    }
                    else {
                        style.styles.push({ ...baseValues, values: { ...baseValues.values } });
                    }
                }
            }
            else if (this.options.debug) {
                console.warn(`Can't find base style ${style.basedOn}`);
            }
        }
        for (let style of styles) {
            style.cssName = this.processStyleName(style.id);
        }
        return stylesMap;
    }
    renderStyles(styles) {
        let styleText = "";
        const stylesMap = this.styleMap;
        const defaultStyles = keyBy(styles.filter(s => s.isDefault), s => s.target);
        for (const style of styles) {
            let subStyles = style.styles;
            if (style.linked) {
                let linkedStyle = style.linked && stylesMap[style.linked];
                if (linkedStyle) {
                    subStyles = subStyles.concat(linkedStyle.styles);
                }
                else if (this.options.debug) {
                    console.warn(`Can't find linked style ${style.linked}`);
                }
            }
            for (const subStyle of subStyles) {
                let selector = `${style.target ?? ''}.${style.cssName}`;
                if (style.target != subStyle.target) {
                    selector += ` ${subStyle.target}`;
                }
                if (defaultStyles[style.target] == style) {
                    selector = `.${this.className} ${style.target}, ` + selector;
                }
                styleText += this.styleToString(selector, subStyle.values);
            }
        }
        return createStyleElement$1(styleText);
    }
    processNumberings(numberings) {
        for (let num of numberings.filter(n => n.pStyleName)) {
            const style = this.findStyle(num.pStyleName);
            if (style?.paragraphProps?.numbering) {
                style.paragraphProps.numbering.level = num.level;
            }
        }
    }
    renderNumbering(numberings, styleContainer) {
        let styleText = "";
        let resetCounters = [];
        for (let num of numberings) {
            let selector = `p.${this.numberingClass(num.id, num.level)}`;
            let listStyleType = "none";
            if (num.bullet) {
                let valiable = `--${this.className}-${num.bullet.src}`.toLowerCase();
                styleText += this.styleToString(`${selector}:before`, {
                    "content": "' '",
                    "display": "inline-block",
                    "background": `var(${valiable})`
                }, num.bullet.style);
                this.document.loadNumberingImage(num.bullet.src).then(data => {
                    let text = `${this.rootSelector} { ${valiable}: url(${data}) }`;
                    styleContainer.appendChild(createStyleElement$1(text));
                });
            }
            else if (num.levelText) {
                let counter = this.numberingCounter(num.id, num.level);
                const counterReset = counter + " " + (num.start - 1);
                if (num.level > 0) {
                    styleText += this.styleToString(`p.${this.numberingClass(num.id, num.level - 1)}`, {
                        "counter-reset": counterReset
                    });
                }
                resetCounters.push(counterReset);
                styleText += this.styleToString(`${selector}:before`, {
                    "content": this.levelTextToContent(num.levelText, num.suff, num.id, this.numFormatToCssValue(num.format)),
                    "counter-increment": counter,
                    ...num.rStyle,
                });
            }
            else {
                listStyleType = this.numFormatToCssValue(num.format);
            }
            styleText += this.styleToString(selector, {
                "display": "list-item",
                "list-style-position": "inside",
                "list-style-type": listStyleType,
                ...num.pStyle
            });
        }
        if (resetCounters.length > 0) {
            styleText += this.styleToString(this.rootSelector, {
                "counter-reset": resetCounters.join(" ")
            });
        }
        return createStyleElement$1(styleText);
    }
    numberingClass(id, lvl) {
        return `${this.className}-num-${id}-${lvl}`;
    }
    styleToString(selectors, values, cssText = null) {
        let result = `${selectors} {\r\n`;
        for (const key in values) {
            if (key.startsWith('$')) {
                continue;
            }
            result += `  ${key}: ${values[key]};\r\n`;
        }
        if (cssText) {
            result += cssText;
        }
        return result + "}\r\n";
    }
    numberingCounter(id, lvl) {
        return `${this.className}-num-${id}-${lvl}`;
    }
    levelTextToContent(text, suff, id, numformat) {
        const suffMap = {
            "tab": "\\9",
            "space": "\\a0",
        };
        let result = text.replace(/%\d*/g, s => {
            let lvl = parseInt(s.substring(1), 10) - 1;
            return `"counter(${this.numberingCounter(id, lvl)}, ${numformat})"`;
        });
        return `"${result}${suffMap[suff] ?? ""}"`;
    }
    numFormatToCssValue(format) {
        let mapping = {
            none: "none",
            bullet: "disc",
            decimal: "decimal",
            lowerLetter: "lower-alpha",
            upperLetter: "upper-alpha",
            lowerRoman: "lower-roman",
            upperRoman: "upper-roman",
            decimalZero: "decimal-leading-zero",
            aiueo: "katakana",
            aiueoFullWidth: "katakana",
            chineseCounting: "simp-chinese-informal",
            chineseCountingThousand: "simp-chinese-informal",
            chineseLegalSimplified: "simp-chinese-formal",
            chosung: "hangul-consonant",
            ideographDigital: "cjk-ideographic",
            ideographTraditional: "cjk-heavenly-stem",
            ideographLegalTraditional: "trad-chinese-formal",
            ideographZodiac: "cjk-earthly-branch",
            iroha: "katakana-iroha",
            irohaFullWidth: "katakana-iroha",
            japaneseCounting: "japanese-informal",
            japaneseDigitalTenThousand: "cjk-decimal",
            japaneseLegal: "japanese-formal",
            thaiNumbers: "thai",
            koreanCounting: "korean-hangul-formal",
            koreanDigital: "korean-hangul-formal",
            koreanDigital2: "korean-hanja-informal",
            hebrew1: "hebrew",
            hebrew2: "hebrew",
            hindiNumbers: "devanagari",
            ganada: "hangul",
            taiwaneseCounting: "cjk-ideographic",
            taiwaneseCountingThousand: "cjk-ideographic",
            taiwaneseDigital: "cjk-decimal",
        };
        return mapping[format] ?? format;
    }
    renderFontTable(fontsPart, styleContainer) {
        for (let f of fontsPart.fonts) {
            for (let ref of f.embedFontRefs) {
                this.document.loadFont(ref.id, ref.key).then(fontData => {
                    const cssValues = {
                        'font-family': f.name,
                        'src': `url(${fontData})`
                    };
                    if (ref.type == "bold" || ref.type == "boldItalic") {
                        cssValues['font-weight'] = 'bold';
                    }
                    if (ref.type == "italic" || ref.type == "boldItalic") {
                        cssValues['font-style'] = 'italic';
                    }
                    appendComment$1(styleContainer, `docxjs ${f.name} font`);
                    const cssText = this.styleToString("@font-face", cssValues);
                    styleContainer.appendChild(createStyleElement$1(cssText));
                    this.refreshTabStops();
                });
            }
        }
    }
    renderWrapper(children) {
        return createElement$1("div", { className: `${this.className}-wrapper` }, children);
    }
    copyStyleProperties(input, output, attrs = null) {
        if (!input) {
            return output;
        }
        if (output == null) {
            output = {};
        }
        if (attrs == null) {
            attrs = Object.getOwnPropertyNames(input);
        }
        for (let key of attrs) {
            if (input.hasOwnProperty(key) && !output.hasOwnProperty(key))
                output[key] = input[key];
        }
        return output;
    }
    processElement(element) {
        if (element.children) {
            for (let e of element.children) {
                e.parent = element;
                if (e.type == DomType.Table) {
                    this.processTable(e);
                }
                else {
                    this.processElement(e);
                }
            }
        }
    }
    processTable(table) {
        for (let r of table.children) {
            for (let c of r.children) {
                c.cssStyle = this.copyStyleProperties(table.cellStyle, c.cssStyle, [
                    "border-left", "border-right", "border-top", "border-bottom",
                    "padding-left", "padding-right", "padding-top", "padding-bottom"
                ]);
                this.processElement(c);
            }
        }
    }
    splitPage(elements) {
        let current_page = new Page({});
        const pages = [current_page];
        for (const elem of elements) {
            elem.level = 1;
            current_page.elements.push(elem);
            if (elem.type == DomType.Paragraph) {
                const p = elem;
                const sectProps = p.sectionProps;
                if (sectProps) {
                    sectProps.sectionId = uuid();
                }
                const default_paragraph_style = this.findStyle(p.styleName);
                if (default_paragraph_style?.paragraphProps?.pageBreakBefore) {
                    current_page.isSplit = true;
                    current_page.sectProps = sectProps;
                    current_page = new Page({});
                    pages.push(current_page);
                }
                let pBreakIndex = -1;
                let rBreakIndex = -1;
                if (p.children) {
                    pBreakIndex = p.children.findIndex(r => {
                        rBreakIndex = r.children?.findIndex((t) => {
                            if (t.type != DomType.Break) {
                                return false;
                            }
                            if (t.break == "lastRenderedPageBreak") {
                                return (current_page.elements.length > 2 || !this.options.ignoreLastRenderedPageBreak);
                            }
                            if (t.break === "page") {
                                return true;
                            }
                        });
                        rBreakIndex = rBreakIndex ?? -1;
                        return rBreakIndex != -1;
                    });
                }
                if (pBreakIndex != -1) {
                    current_page.isSplit = true;
                    const exist_table = current_page.elements.some(elem => elem.type === DomType.Table);
                    if (exist_table) {
                        current_page.isSplit = false;
                    }
                    let exist_TOC = current_page.elements.some((paragraph) => {
                        return paragraph.children.some((elem) => {
                            if (elem.type === DomType.Hyperlink) {
                                return elem?.href?.includes('Toc');
                            }
                            return false;
                        });
                    });
                    if (exist_TOC) {
                        current_page.isSplit = false;
                    }
                }
                if (pBreakIndex != -1 || (sectProps && sectProps.type != SectionType.Continuous && sectProps.type != SectionType.NextColumn)) {
                    current_page.sectProps = sectProps;
                    current_page = new Page({});
                    pages.push(current_page);
                }
                if (pBreakIndex != -1) {
                    let breakRun = p.children[pBreakIndex];
                    let is_split = rBreakIndex < breakRun.children.length - 1;
                    if (pBreakIndex < p.children.length - 1 || is_split) {
                        let origin_run = p.children;
                        const new_paragraph = {
                            ...p,
                            children: origin_run.slice(pBreakIndex),
                        };
                        p.children = origin_run.slice(0, pBreakIndex);
                        current_page.elements.push(new_paragraph);
                        if (is_split) {
                            const origin_elements = breakRun.children;
                            const newRun = {
                                ...breakRun,
                                children: origin_elements.slice(0, rBreakIndex),
                            };
                            p.children.push(newRun);
                            breakRun.children = origin_elements.slice(rBreakIndex);
                        }
                    }
                }
            }
            if (elem.type === DomType.Table) {
                current_page.isSplit = false;
            }
        }
        let currentSectProps = null;
        for (let i = pages.length - 1; i >= 0; i--) {
            if (pages[i].sectProps == null) {
                pages[i].sectProps = currentSectProps;
            }
            else {
                currentSectProps = pages[i].sectProps;
            }
        }
        return pages;
    }
    renderPages(document) {
        const result = [];
        this.processElement(document);
        let pages;
        if (this.options.breakPages) {
            pages = this.splitPage(document.children);
        }
        else {
            pages = [new Page({ sectProps: document.props, elements: document.children, })];
        }
        document.pages = pages;
        let prevProps = null;
        for (let i = 0, l = pages.length; i < l; i++) {
            this.currentFootnoteIds = [];
            const page = pages[i];
            const { sectProps } = page;
            let sectionProps = sectProps ?? document.props;
            let pageIndex = result.length;
            let isFirstPage = prevProps != sectionProps;
            let isLastPage = i === l - 1;
            let pageElements = this.renderPage(page, sectionProps, document.cssStyle, pageIndex, isFirstPage, isLastPage);
            result.push(...pageElements);
            prevProps = sectProps;
        }
        return result;
    }
    renderPage(page, props, sectionStyle, pageIndex, isFirstPage, isLastPage) {
        const pageElement = this.createPage(this.className, props);
        this.renderStyleValues(sectionStyle, pageElement);
        if (this.options.renderHeaders) {
            this.renderHeaderFooterRef(props.headerRefs, props, pageIndex, isFirstPage, pageElement);
        }
        let contentElement = createElement$1("article");
        if (this.options.breakPages) {
            contentElement.style.minHeight = props.contentSize.height;
        }
        this.renderElements(page.elements, contentElement);
        pageElement.appendChild(contentElement);
        if (this.options.renderFootnotes) {
            this.renderNotes(this.currentFootnoteIds, this.footnoteMap, pageElement);
        }
        if (this.options.renderEndnotes && isLastPage) {
            this.renderNotes(this.currentEndnoteIds, this.endnoteMap, pageElement);
        }
        if (this.options.renderFooters) {
            this.renderHeaderFooterRef(props.footerRefs, props, pageIndex, isFirstPage, pageElement);
        }
        return [pageElement];
    }
    createPage(className, props) {
        let oPage = createElement$1("section", { className });
        if (props) {
            if (props.pageMargins) {
                oPage.style.paddingLeft = props.pageMargins.left;
                oPage.style.paddingRight = props.pageMargins.right;
                oPage.style.paddingTop = props.pageMargins.top;
                oPage.style.paddingBottom = props.pageMargins.bottom;
            }
            if (props.pageSize) {
                if (!this.options.ignoreWidth) {
                    oPage.style.width = props.pageSize.width;
                }
                if (!this.options.ignoreHeight) {
                    oPage.style.minHeight = props.pageSize.height;
                }
            }
            if (props.columns && props.columns.count) {
                oPage.style.columnCount = `${props.columns.count}`;
                oPage.style.columnGap = props.columns.space;
                if (props.columns.separator) {
                    oPage.style.columnRule = "1px solid black";
                }
            }
        }
        return oPage;
    }
    renderHeaderFooterRef(refs, props, page, isFirstPage, parent) {
        if (!refs)
            return;
        let ref = (props.titlePage && isFirstPage ? refs.find(x => x.type == "first") : null)
            ?? (page % 2 == 1 ? refs.find(x => x.type == "even") : null)
            ?? refs.find(x => x.type == "default");
        let part = ref && this.document.findPartByRelId(ref.id, this.document.documentPart);
        if (part) {
            this.currentPart = part;
            if (!this.usedHederFooterParts.includes(part.path)) {
                this.processElement(part.rootElement);
                this.usedHederFooterParts.push(part.path);
            }
            switch (part.rootElement.type) {
                case DomType.Header:
                    part.rootElement.cssStyle = {
                        left: props.pageMargins?.left,
                        width: props.contentSize?.width,
                        height: props.pageMargins?.top,
                    };
                    break;
                case DomType.Footer:
                    part.rootElement.cssStyle = {
                        left: props.pageMargins?.left,
                        width: props.contentSize?.width,
                        height: props.pageMargins?.bottom,
                    };
                    break;
                default:
                    console.warn('set header/footer style error', part.rootElement.type);
                    break;
            }
            this.renderElements([part.rootElement], parent);
            this.currentPart = null;
        }
    }
    renderNotes(noteIds, notesMap, parent) {
        let notes = noteIds.map(id => notesMap[id]).filter(x => x);
        if (notes.length > 0) {
            let children = this.renderElements(notes);
            let result = createElement$1("ol", null, children);
            parent.appendChild(result);
        }
    }
    renderElements(elems, parent) {
        if (elems == null) {
            return null;
        }
        let result = [];
        for (let i = 0; i < elems.length; i++) {
            let element = this.renderElement(elems[i]);
            if (Array.isArray(element)) {
                result.push(...element);
            }
            else if (element) {
                result.push(element);
            }
        }
        if (parent) {
            appendChildren$1(parent, result);
        }
        return result;
    }
    renderElement(elem) {
        switch (elem.type) {
            case DomType.Paragraph:
                return this.renderParagraph(elem);
            case DomType.BookmarkStart:
                return this.renderBookmarkStart(elem);
            case DomType.BookmarkEnd:
                return null;
            case DomType.Run:
                return this.renderRun(elem);
            case DomType.Table:
                return this.renderTable(elem);
            case DomType.Row:
                return this.renderTableRow(elem);
            case DomType.Cell:
                return this.renderTableCell(elem);
            case DomType.Hyperlink:
                return this.renderHyperlink(elem);
            case DomType.Drawing:
                return this.renderDrawing(elem);
            case DomType.Image:
                return this.renderImage(elem);
            case DomType.Text:
                return this.renderText(elem);
            case DomType.DeletedText:
                return this.renderDeletedText(elem);
            case DomType.Tab:
                return this.renderTab(elem);
            case DomType.Symbol:
                return this.renderSymbol(elem);
            case DomType.Break:
                return this.renderBreak(elem);
            case DomType.Footer:
                return this.renderHeaderFooter(elem, "footer");
            case DomType.Header:
                return this.renderHeaderFooter(elem, "header");
            case DomType.Footnote:
            case DomType.Endnote:
                return this.renderContainer(elem, "li");
            case DomType.FootnoteReference:
                return this.renderFootnoteReference(elem);
            case DomType.EndnoteReference:
                return this.renderEndnoteReference(elem);
            case DomType.NoBreakHyphen:
                return createElement$1("wbr");
            case DomType.VmlPicture:
                return this.renderVmlPicture(elem);
            case DomType.VmlElement:
                return this.renderVmlElement(elem);
            case DomType.MmlMath:
                return this.renderContainerNS(elem, ns$1.mathML, "math", { xmlns: ns$1.mathML });
            case DomType.MmlMathParagraph:
                return this.renderContainer(elem, "span");
            case DomType.MmlFraction:
                return this.renderContainerNS(elem, ns$1.mathML, "mfrac");
            case DomType.MmlBase:
                return this.renderContainerNS(elem, ns$1.mathML, elem.parent.type == DomType.MmlMatrixRow ? "mtd" : "mrow");
            case DomType.MmlNumerator:
            case DomType.MmlDenominator:
            case DomType.MmlFunction:
            case DomType.MmlLimit:
            case DomType.MmlBox:
                return this.renderContainerNS(elem, ns$1.mathML, "mrow");
            case DomType.MmlGroupChar:
                return this.renderMmlGroupChar(elem);
            case DomType.MmlLimitLower:
                return this.renderContainerNS(elem, ns$1.mathML, "munder");
            case DomType.MmlMatrix:
                return this.renderContainerNS(elem, ns$1.mathML, "mtable");
            case DomType.MmlMatrixRow:
                return this.renderContainerNS(elem, ns$1.mathML, "mtr");
            case DomType.MmlRadical:
                return this.renderMmlRadical(elem);
            case DomType.MmlSuperscript:
                return this.renderContainerNS(elem, ns$1.mathML, "msup");
            case DomType.MmlSubscript:
                return this.renderContainerNS(elem, ns$1.mathML, "msub");
            case DomType.MmlDegree:
            case DomType.MmlSuperArgument:
            case DomType.MmlSubArgument:
                return this.renderContainerNS(elem, ns$1.mathML, "mn");
            case DomType.MmlFunctionName:
                return this.renderContainerNS(elem, ns$1.mathML, "ms");
            case DomType.MmlDelimiter:
                return this.renderMmlDelimiter(elem);
            case DomType.MmlRun:
                return this.renderMmlRun(elem);
            case DomType.MmlNary:
                return this.renderMmlNary(elem);
            case DomType.MmlPreSubSuper:
                return this.renderMmlPreSubSuper(elem);
            case DomType.MmlBar:
                return this.renderMmlBar(elem);
            case DomType.MmlEquationArray:
                return this.renderMllList(elem);
            case DomType.Inserted:
                return this.renderInserted(elem);
            case DomType.Deleted:
                return this.renderDeleted(elem);
        }
        return null;
    }
    isPageBreakElement(elem) {
        if (elem.type != DomType.Break) {
            return false;
        }
        if (elem.break == "lastRenderedPageBreak") {
            return !this.options.ignoreLastRenderedPageBreak;
        }
        if (elem.break === "page") {
            return true;
        }
    }
    renderChildren(elem, parent) {
        return this.renderElements(elem.children, parent);
    }
    renderContainer(elem, tagName, props) {
        return createElement$1(tagName, props, this.renderChildren(elem));
    }
    renderContainerNS(elem, ns, tagName, props) {
        return createElementNS$1(ns, tagName, props, this.renderChildren(elem));
    }
    renderParagraph(elem) {
        let result = createElement$1("p");
        const style = this.findStyle(elem.styleName);
        elem.tabs ?? (elem.tabs = style?.paragraphProps?.tabs);
        this.renderClass(elem, result);
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        this.renderCommonProperties(result.style, elem);
        const numbering = elem.numbering ?? style?.paragraphProps?.numbering;
        if (numbering) {
            result.classList.add(this.numberingClass(numbering.id, numbering.level));
        }
        return result;
    }
    renderRun(elem) {
        if (elem.fieldRun)
            return null;
        const result = createElement$1("span");
        if (elem.id)
            result.id = elem.id;
        this.renderClass(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        if (elem.verticalAlign) {
            const wrapper = createElement$1(elem.verticalAlign);
            this.renderChildren(elem, wrapper);
            result.appendChild(wrapper);
        }
        else {
            this.renderChildren(elem, result);
        }
        return result;
    }
    renderText(elem) {
        return document.createTextNode(elem.text);
    }
    renderHyperlink(elem) {
        let result = createElement$1("a");
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        if (elem.href) {
            result.href = elem.href;
        }
        else if (elem.id) {
            const rel = this.document.documentPart.rels
                .find(it => it.id == elem.id && it.targetMode === "External");
            result.href = rel?.target;
        }
        return result;
    }
    renderDrawing(elem) {
        let result = createElement$1("div");
        result.style.display = "inline-block";
        result.style.position = "relative";
        result.style.textIndent = "0px";
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        return result;
    }
    renderImage(elem) {
        let result = createElement$1("img");
        this.renderStyleValues(elem.cssStyle, result);
        if (this.document) {
            this.document
                .loadDocumentImage(elem.src, this.currentPart)
                .then(src => {
                result.src = src;
            });
        }
        return result;
    }
    renderDeletedText(elem) {
        return this.options.renderEndnotes ? document.createTextNode(elem.text) : null;
    }
    renderBreak(elem) {
        if (elem.break == "textWrapping") {
            return createElement$1("br");
        }
        return null;
    }
    renderInserted(elem) {
        if (this.options.renderChanges) {
            return this.renderContainer(elem, "ins");
        }
        return this.renderChildren(elem);
    }
    renderDeleted(elem) {
        if (this.options.renderChanges) {
            return this.renderContainer(elem, "del");
        }
        return null;
    }
    renderSymbol(elem) {
        let span = createElement$1("span");
        span.style.fontFamily = elem.font;
        span.innerHTML = `&#x${elem.char};`;
        return span;
    }
    renderHeaderFooter(elem, tagName) {
        let result = createElement$1(tagName);
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        return result;
    }
    renderFootnoteReference(elem) {
        let result = createElement$1("sup");
        this.currentFootnoteIds.push(elem.id);
        result.textContent = `${this.currentFootnoteIds.length}`;
        return result;
    }
    renderEndnoteReference(elem) {
        let result = createElement$1("sup");
        this.currentEndnoteIds.push(elem.id);
        result.textContent = `${this.currentEndnoteIds.length}`;
        return result;
    }
    renderTab(elem) {
        let tabSpan = createElement$1("span");
        tabSpan.innerHTML = "&emsp;";
        if (this.options.experimental) {
            tabSpan.className = this.tabStopClass();
            let stops = findParent$1(elem, DomType.Paragraph)?.tabs;
            this.currentTabs.push({ stops, span: tabSpan });
        }
        return tabSpan;
    }
    renderBookmarkStart(elem) {
        let result = createElement$1("span");
        result.id = elem.name;
        return result;
    }
    renderTable(elem) {
        let oTable = createElement$1("table");
        this.tableCellPositions.push(this.currentCellPosition);
        this.tableVerticalMerges.push(this.currentVerticalMerge);
        this.currentVerticalMerge = {};
        this.currentCellPosition = { col: 0, row: 0 };
        if (elem.columns) {
            oTable.appendChild(this.renderTableColumns(elem.columns));
        }
        this.renderClass(elem, oTable);
        this.renderChildren(elem, oTable);
        this.renderStyleValues(elem.cssStyle, oTable);
        this.currentVerticalMerge = this.tableVerticalMerges.pop();
        this.currentCellPosition = this.tableCellPositions.pop();
        return oTable;
    }
    renderTableColumns(columns) {
        let result = createElement$1("colgroup");
        for (let col of columns) {
            let colElem = createElement$1("col");
            if (col.width)
                colElem.style.width = col.width;
            result.appendChild(colElem);
        }
        return result;
    }
    renderTableRow(elem) {
        let result = createElement$1("tr");
        this.currentCellPosition.col = 0;
        this.renderClass(elem, result);
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        this.currentCellPosition.row++;
        return result;
    }
    renderTableCell(elem) {
        let result = createElement$1("td");
        const key = this.currentCellPosition.col;
        if (elem.verticalMerge) {
            if (elem.verticalMerge == "restart") {
                this.currentVerticalMerge[key] = result;
                result.rowSpan = 1;
            }
            else if (this.currentVerticalMerge[key]) {
                this.currentVerticalMerge[key].rowSpan += 1;
                result.style.display = "none";
            }
        }
        else {
            this.currentVerticalMerge[key] = null;
        }
        this.renderClass(elem, result);
        this.renderChildren(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        if (elem.span)
            result.colSpan = elem.span;
        this.currentCellPosition.col += result.colSpan;
        return result;
    }
    renderVmlPicture(elem) {
        let result = createElement$1("div");
        this.renderChildren(elem, result);
        return result;
    }
    renderVmlElement(elem) {
        let container = createSvgElement$1("svg");
        container.setAttribute("style", elem.cssStyleText);
        const result = this.renderVmlChildElement(elem);
        if (elem.imageHref?.id) {
            this.document?.loadDocumentImage(elem.imageHref.id, this.currentPart)
                .then(x => result.setAttribute("href", x));
        }
        container.appendChild(result);
        requestAnimationFrame(() => {
            const bb = container.firstElementChild.getBBox();
            container.setAttribute("width", `${Math.ceil(bb.x + bb.width)}`);
            container.setAttribute("height", `${Math.ceil(bb.y + bb.height)}`);
        });
        return container;
    }
    renderVmlChildElement(elem) {
        const result = createSvgElement$1(elem.tagName);
        Object.entries(elem.attrs).forEach(([k, v]) => result.setAttribute(k, v));
        for (let child of elem.children) {
            if (child.type == DomType.VmlElement) {
                result.appendChild(this.renderVmlChildElement(child));
            }
            else {
                result.append(...asArray(this.renderElement(child)));
            }
        }
        return result;
    }
    renderMmlRadical(elem) {
        const base = elem.children.find(el => el.type == DomType.MmlBase);
        if (elem.props?.hideDegree) {
            return createElementNS$1(ns$1.mathML, "msqrt", null, this.renderElements([base]));
        }
        const degree = elem.children.find(el => el.type == DomType.MmlDegree);
        return createElementNS$1(ns$1.mathML, "mroot", null, this.renderElements([base, degree]));
    }
    renderMmlDelimiter(elem) {
        const children = [];
        children.push(createElementNS$1(ns$1.mathML, "mo", null, [elem.props.beginChar ?? '(']));
        children.push(...this.renderElements(elem.children));
        children.push(createElementNS$1(ns$1.mathML, "mo", null, [elem.props.endChar ?? ')']));
        return createElementNS$1(ns$1.mathML, "mrow", null, children);
    }
    renderMmlNary(elem) {
        const children = [];
        const grouped = keyBy(elem.children, x => x.type);
        const sup = grouped[DomType.MmlSuperArgument];
        const sub = grouped[DomType.MmlSubArgument];
        const supElem = sup ? createElementNS$1(ns$1.mathML, "mo", null, asArray(this.renderElement(sup))) : null;
        const subElem = sub ? createElementNS$1(ns$1.mathML, "mo", null, asArray(this.renderElement(sub))) : null;
        const charElem = createElementNS$1(ns$1.mathML, "mo", null, [elem.props?.char ?? '\u222B']);
        if (supElem || subElem) {
            children.push(createElementNS$1(ns$1.mathML, "munderover", null, [charElem, subElem, supElem]));
        }
        else if (supElem) {
            children.push(createElementNS$1(ns$1.mathML, "mover", null, [charElem, supElem]));
        }
        else if (subElem) {
            children.push(createElementNS$1(ns$1.mathML, "munder", null, [charElem, subElem]));
        }
        else {
            children.push(charElem);
        }
        children.push(...this.renderElements(grouped[DomType.MmlBase].children));
        return createElementNS$1(ns$1.mathML, "mrow", null, children);
    }
    renderMmlPreSubSuper(elem) {
        const children = [];
        const grouped = keyBy(elem.children, x => x.type);
        const sup = grouped[DomType.MmlSuperArgument];
        const sub = grouped[DomType.MmlSubArgument];
        const supElem = sup ? createElementNS$1(ns$1.mathML, "mo", null, asArray(this.renderElement(sup))) : null;
        const subElem = sub ? createElementNS$1(ns$1.mathML, "mo", null, asArray(this.renderElement(sub))) : null;
        const stubElem = createElementNS$1(ns$1.mathML, "mo", null);
        children.push(createElementNS$1(ns$1.mathML, "msubsup", null, [stubElem, subElem, supElem]));
        children.push(...this.renderElements(grouped[DomType.MmlBase].children));
        return createElementNS$1(ns$1.mathML, "mrow", null, children);
    }
    renderMmlGroupChar(elem) {
        const tagName = elem.props.verticalJustification === "bot" ? "mover" : "munder";
        const result = this.renderContainerNS(elem, ns$1.mathML, tagName);
        if (elem.props.char) {
            result.appendChild(createElementNS$1(ns$1.mathML, "mo", null, [elem.props.char]));
        }
        return result;
    }
    renderMmlBar(elem) {
        const result = this.renderContainerNS(elem, ns$1.mathML, "mrow");
        switch (elem.props.position) {
            case "top":
                result.style.textDecoration = "overline";
                break;
            case "bottom":
                result.style.textDecoration = "underline";
                break;
        }
        return result;
    }
    renderMmlRun(elem) {
        const result = createElementNS$1(ns$1.mathML, "ms");
        this.renderClass(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        this.renderChildren(elem, result);
        return result;
    }
    renderMllList(elem) {
        const result = createElementNS$1(ns$1.mathML, "mtable");
        this.renderClass(elem, result);
        this.renderStyleValues(elem.cssStyle, result);
        const children = this.renderChildren(elem);
        for (let child of children) {
            result.appendChild(createElementNS$1(ns$1.mathML, "mtr", null, [
                createElementNS$1(ns$1.mathML, "mtd", null, [child])
            ]));
        }
        return result;
    }
    renderStyleValues(style, output) {
        for (let k in style) {
            if (k.startsWith("$")) {
                output.setAttribute(k.slice(1), style[k]);
            }
            else {
                output.style[k] = style[k];
            }
        }
    }
    renderRunProperties(style, props) {
        this.renderCommonProperties(style, props);
    }
    renderCommonProperties(style, props) {
        if (props == null)
            return;
        if (props.color) {
            style["color"] = props.color;
        }
        if (props.fontSize) {
            style["font-size"] = props.fontSize;
        }
    }
    renderClass(input, output) {
        if (input.className) {
            output.className = input.className;
        }
        if (input.styleName) {
            output.classList.add(this.processStyleName(input.styleName));
        }
    }
    findStyle(styleName) {
        return styleName && this.styleMap?.[styleName];
    }
    tabStopClass() {
        return `${this.className}-tab-stop`;
    }
    refreshTabStops() {
        if (!this.options.experimental) {
            return;
        }
        clearTimeout(this.tabsTimeout);
        this.tabsTimeout = setTimeout(() => {
            const pixelToPoint = computePixelToPoint();
            for (let tab of this.currentTabs) {
                updateTabStop(tab.span, tab.stops, this.defaultTabSize, pixelToPoint);
            }
        }, 500);
    }
}
function createElement$1(tagName, props, children) {
    return createElementNS$1(undefined, tagName, props, children);
}
function createSvgElement$1(tagName, props, children) {
    return createElementNS$1(ns$1.svg, tagName, props, children);
}
function createElementNS$1(ns, tagName, props, children) {
    let result = ns ? document.createElementNS(ns, tagName) : document.createElement(tagName);
    Object.assign(result, props);
    children && appendChildren$1(result, children);
    return result;
}
function removeAllElements$1(elem) {
    elem.innerHTML = '';
}
function appendChildren$1(parent, children) {
    children.forEach(child => {
        parent.appendChild(isString(child) ? document.createTextNode(child) : child);
    });
}
function createStyleElement$1(cssText) {
    return createElement$1("style", { innerHTML: cssText });
}
function appendComment$1(elem, comment) {
    elem.appendChild(document.createComment(comment));
}
function findParent$1(elem, type) {
    let parent = elem.parent;
    while (parent != null && parent.type != type)
        parent = parent.parent;
    return parent;
}

const ns = {
    html: 'http://www.w3.org/1999/xhtml',
    svg: 'http://www.w3.org/2000/svg',
    mathML: 'http://www.w3.org/1998/Math/MathML',
};
var Overflow;
(function (Overflow) {
    Overflow["TRUE"] = "true";
    Overflow["FALSE"] = "false";
    Overflow["UNKNOWN"] = "undetected";
})(Overflow || (Overflow = {}));
class HtmlRendererSync {
    constructor() {
        this.className = 'docx';
        this.styleMap = {};
        this.currentPart = null;
        this.tableVerticalMerges = [];
        this.currentVerticalMerge = null;
        this.tableCellPositions = [];
        this.currentCellPosition = null;
        this.footnoteMap = {};
        this.endnoteMap = {};
        this.currentEndnoteIds = [];
        this.usedHederFooterParts = [];
        this.currentTabs = [];
        this.tabsTimeout = 0;
    }
    async render(document, bodyContainer, styleContainer = null, options) {
        this.document = document;
        this.options = options;
        this.className = options.className;
        this.rootSelector = options.inWrapper ? `.${this.className}-wrapper` : ':root';
        this.styleMap = null;
        this.wrapper = bodyContainer;
        styleContainer = styleContainer || bodyContainer;
        removeAllElements(styleContainer);
        removeAllElements(bodyContainer);
        appendComment(styleContainer, 'docxjs library predefined styles');
        styleContainer.appendChild(this.renderDefaultStyle());
        if (document.themePart) {
            appendComment(styleContainer, 'docxjs document theme values');
            this.renderTheme(document.themePart, styleContainer);
        }
        if (document.stylesPart != null) {
            this.styleMap = this.processStyles(document.stylesPart.styles);
            appendComment(styleContainer, 'docxjs document styles');
            styleContainer.appendChild(this.renderStyles(document.stylesPart.styles));
        }
        if (document.numberingPart) {
            this.processNumberings(document.numberingPart.domNumberings);
            appendComment(styleContainer, "docxjs document numbering styles");
            styleContainer.appendChild(this.renderNumbering(document.numberingPart.domNumberings, styleContainer));
        }
        if (!options.ignoreFonts && document.fontTablePart) {
            this.renderFontTable(document.fontTablePart, styleContainer);
        }
        if (document.footnotesPart) {
            this.footnoteMap = keyBy(document.footnotesPart.notes, x => x.id);
        }
        if (document.endnotesPart) {
            this.endnoteMap = keyBy(document.endnotesPart.notes, x => x.id);
        }
        if (document.settingsPart) {
            this.defaultTabSize = document.settingsPart.settings?.defaultTabStop;
        }
        if (this.options.inWrapper) {
            this.wrapper = this.renderWrapper();
            bodyContainer.appendChild(this.wrapper);
        }
        else {
            this.wrapper = bodyContainer;
        }
        this.renderKonva();
        await this.renderPages(document.documentPart.body);
        this.refreshTabStops();
    }
    renderDefaultStyle() {
        const c = this.className;
        const styleText = `
			.${c}-wrapper { background: gray; padding: 30px; padding-bottom: 0px; display: flex; flex-flow: column; align-items: center; line-height:normal; font-weight:normal; } 
			.${c}-wrapper>section.${c} { background: white; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); margin-bottom: 30px; }
			.${c} { color: black; hyphens: auto; text-underline-position: from-font; }
			section.${c} { box-sizing: border-box; display: flex; flex-flow: column nowrap; position: relative; overflow: hidden; }
            section.${c}>header { position: absolute; top: 0; z-index: 1; display: flex; align-items: flex-end; }
			section.${c}>article { z-index: 1; }
			section.${c}>footer { position: absolute; bottom: 0; z-index: 1; }
			.${c} table { border-collapse: collapse; }
			.${c} table td, .${c} table th { vertical-align: top; }
			.${c} p { margin: 0pt; min-height: 1em; }
			.${c} span { white-space: pre-wrap; overflow-wrap: break-word; }
			.${c} a { color: inherit; text-decoration: inherit; }
			.${c} img, ${c} svg { vertical-align: baseline; }
			.${c} .clearfix::after { content: ""; display: block; line-height: 0; clear: both; }
		`;
        return createStyleElement(styleText);
    }
    renderTheme(themePart, styleContainer) {
        const variables = {};
        const fontScheme = themePart.theme?.fontScheme;
        if (fontScheme) {
            if (fontScheme.majorFont) {
                variables['--docx-majorHAnsi-font'] = fontScheme.majorFont.latinTypeface;
            }
            if (fontScheme.minorFont) {
                variables['--docx-minorHAnsi-font'] = fontScheme.minorFont.latinTypeface;
            }
        }
        const colorScheme = themePart.theme?.colorScheme;
        if (colorScheme) {
            for (const [k, v] of Object.entries(colorScheme.colors)) {
                variables[`--docx-${k}-color`] = `#${v}`;
            }
        }
        const cssText = this.styleToString(`.${this.className}`, variables);
        styleContainer.appendChild(createStyleElement(cssText));
    }
    processStyleName(className) {
        return className ? `${this.className}_${escapeClassName(className)}` : this.className;
    }
    processStyles(styles) {
        let stylesMap = keyBy(styles.filter(x => x.id != null), x => x.id);
        for (const style of styles.filter(x => x.basedOn)) {
            const baseStyle = stylesMap[style.basedOn];
            if (baseStyle) {
                style.paragraphProps = mergeDeep(style.paragraphProps, baseStyle.paragraphProps);
                style.runProps = mergeDeep(style.runProps, baseStyle.runProps);
                for (let baseValues of baseStyle.styles) {
                    let styleValues = style.styles.find(x => x.target == baseValues.target);
                    if (styleValues) {
                        this.copyStyleProperties(baseValues.values, styleValues.values);
                    }
                    else {
                        style.styles.push({ ...baseValues, values: { ...baseValues.values } });
                    }
                }
            }
            else if (this.options.debug) {
                console.warn(`Can't find base style ${style.basedOn}`);
            }
        }
        for (const style of styles) {
            style.cssName = this.processStyleName(style.id);
        }
        return stylesMap;
    }
    renderStyles(styles) {
        let styleText = "";
        let stylesMap = this.styleMap;
        let defaultStyles = keyBy(styles.filter(s => s.isDefault), s => s.target);
        for (const style of styles) {
            let subStyles = style.styles;
            if (style.linked) {
                const linkedStyle = style.linked && stylesMap[style.linked];
                if (linkedStyle) {
                    subStyles = subStyles.concat(linkedStyle.styles);
                }
                else if (this.options.debug) {
                    console.warn(`Can't find linked style ${style.linked}`);
                }
            }
            for (const subStyle of subStyles) {
                let selector = `${style.target ?? ''}.${style.cssName}`;
                if (style.target != subStyle.target) {
                    selector += ` ${subStyle.target}`;
                }
                if (defaultStyles[style.target] == style) {
                    selector = `.${this.className} ${style.target}, ` + selector;
                }
                styleText += this.styleToString(selector, subStyle.values);
            }
        }
        return createStyleElement(styleText);
    }
    processNumberings(numberings) {
        for (const num of numberings.filter(n => n.pStyleName)) {
            const style = this.findStyle(num.pStyleName);
            if (style?.paragraphProps?.numbering) {
                style.paragraphProps.numbering.level = num.level;
            }
        }
    }
    renderNumbering(numberings, styleContainer) {
        let styleText = '';
        const resetCounters = [];
        for (const num of numberings) {
            const selector = `p.${this.numberingClass(num.id, num.level)}`;
            let listStyleType = 'none';
            if (num.bullet) {
                const valiable = `--${this.className}-${num.bullet.src}`.toLowerCase();
                styleText += this.styleToString(`${selector}:before`, {
                    "content": "' '",
                    "display": "inline-block",
                    "background": `var(${valiable})`
                }, num.bullet.style);
                this.document.loadNumberingImage(num.bullet.src).then(data => {
                    const text = `${this.rootSelector} { ${valiable}: url(${data}) }`;
                    styleContainer.appendChild(createStyleElement(text));
                });
            }
            else if (num.levelText) {
                const counter = this.numberingCounter(num.id, num.level);
                const counterReset = counter + ' ' + (num.start - 1);
                if (num.level > 0) {
                    styleText += this.styleToString(`p.${this.numberingClass(num.id, num.level - 1)}`, {
                        "counter-reset": counterReset
                    });
                }
                resetCounters.push(counterReset);
                styleText += this.styleToString(`${selector}:before`, {
                    "content": this.levelTextToContent(num.levelText, num.suff, num.id, this.numFormatToCssValue(num.format)),
                    "counter-increment": counter,
                    ...num.rStyle,
                });
            }
            else {
                listStyleType = this.numFormatToCssValue(num.format);
            }
            styleText += this.styleToString(selector, {
                display: 'list-item',
                'list-style-position': 'inside',
                'list-style-type': listStyleType,
                ...num.pStyle,
            });
        }
        if (resetCounters.length > 0) {
            styleText += this.styleToString(this.rootSelector, {
                'counter-reset': resetCounters.join(' '),
            });
        }
        return createStyleElement(styleText);
    }
    numberingClass(id, lvl) {
        return `${this.className}-num-${id}-${lvl}`;
    }
    styleToString(selectors, values, cssText = null) {
        let result = `${selectors} {\r\n`;
        for (const key in values) {
            if (key.startsWith('$')) {
                continue;
            }
            result += `  ${key}: ${values[key]};\r\n`;
        }
        if (cssText) {
            result += cssText;
        }
        return result + '}\r\n';
    }
    numberingCounter(id, lvl) {
        return `${this.className}-num-${id}-${lvl}`;
    }
    levelTextToContent(text, suff, id, numformat) {
        const suffMap = {
            tab: '\\9',
            space: '\\a0',
        };
        const result = text.replace(/%\d*/g, s => {
            const lvl = parseInt(s.substring(1), 10) - 1;
            return `"counter(${this.numberingCounter(id, lvl)}, ${numformat})"`;
        });
        return `"${result}${suffMap[suff] ?? ''}"`;
    }
    numFormatToCssValue(format) {
        const mapping = {
            none: 'none',
            bullet: 'disc',
            decimal: 'decimal',
            lowerLetter: 'lower-alpha',
            upperLetter: 'upper-alpha',
            lowerRoman: 'lower-roman',
            upperRoman: 'upper-roman',
            decimalZero: 'decimal-leading-zero',
            aiueo: 'katakana',
            aiueoFullWidth: 'katakana',
            chineseCounting: 'simp-chinese-informal',
            chineseCountingThousand: 'simp-chinese-informal',
            chineseLegalSimplified: 'simp-chinese-formal',
            chosung: 'hangul-consonant',
            ideographDigital: 'cjk-ideographic',
            ideographTraditional: 'cjk-heavenly-stem',
            ideographLegalTraditional: 'trad-chinese-formal',
            ideographZodiac: 'cjk-earthly-branch',
            iroha: 'katakana-iroha',
            irohaFullWidth: 'katakana-iroha',
            japaneseCounting: 'japanese-informal',
            japaneseDigitalTenThousand: 'cjk-decimal',
            japaneseLegal: 'japanese-formal',
            thaiNumbers: 'thai',
            koreanCounting: 'korean-hangul-formal',
            koreanDigital: 'korean-hangul-formal',
            koreanDigital2: 'korean-hanja-informal',
            hebrew1: 'hebrew',
            hebrew2: 'hebrew',
            hindiNumbers: 'devanagari',
            ganada: 'hangul',
            taiwaneseCounting: 'cjk-ideographic',
            taiwaneseCountingThousand: 'cjk-ideographic',
            taiwaneseDigital: 'cjk-decimal',
        };
        return mapping[format] ?? format;
    }
    renderFontTable(fontsPart, styleContainer) {
        for (const f of fontsPart.fonts) {
            for (const ref of f.embedFontRefs) {
                this.document.loadFont(ref.id, ref.key).then(fontData => {
                    const cssValues = {
                        'font-family': f.name,
                        src: `url(${fontData})`,
                    };
                    if (ref.type == 'bold' || ref.type == 'boldItalic') {
                        cssValues['font-weight'] = 'bold';
                    }
                    if (ref.type == 'italic' || ref.type == 'boldItalic') {
                        cssValues['font-style'] = 'italic';
                    }
                    appendComment(styleContainer, `docxjs ${f.name} font`);
                    const cssText = this.styleToString('@font-face', cssValues);
                    styleContainer.appendChild(createStyleElement(cssText));
                    this.refreshTabStops();
                });
            }
        }
    }
    renderWrapper() {
        return createElement('div', { className: `${this.className}-wrapper` });
    }
    copyStyleProperties(input, output, attrs = null) {
        if (!input) {
            return output;
        }
        if (output == null) {
            output = {};
        }
        if (attrs == null) {
            attrs = Object.getOwnPropertyNames(input);
        }
        for (const key of attrs) {
            if (input.hasOwnProperty(key) && !output.hasOwnProperty(key))
                output[key] = input[key];
        }
        return output;
    }
    processElement(element) {
        if (element.children) {
            for (const e of element.children) {
                e.parent = element;
                if (e.type == DomType.Table) {
                    this.processTable(e);
                    this.processElement(e);
                }
                else {
                    this.processElement(e);
                }
            }
        }
    }
    processTable(table) {
        for (const r of table.children) {
            for (const c of r.children) {
                c.cssStyle = this.copyStyleProperties(table.cellStyle, c.cssStyle, [
                    'border-left',
                    'border-right',
                    'border-top',
                    'border-bottom',
                    'padding-left',
                    'padding-right',
                    'padding-top',
                    'padding-bottom',
                ]);
            }
        }
    }
    splitPage(elements) {
        let current_page = new Page({});
        const pages = [current_page];
        for (const elem of elements) {
            elem.level = 1;
            current_page.elements.push(elem);
            if (elem.type == DomType.Paragraph) {
                const p = elem;
                const sectProps = p.sectionProps;
                if (sectProps) {
                    sectProps.sectionId = uuid();
                }
                const default_paragraph_style = this.findStyle(p.styleName);
                if (default_paragraph_style?.paragraphProps?.pageBreakBefore) {
                    current_page.isSplit = true;
                    current_page.sectProps = sectProps;
                    current_page = new Page({});
                    pages.push(current_page);
                }
                let pBreakIndex = -1;
                let rBreakIndex = -1;
                if (p.children) {
                    pBreakIndex = p.children.findIndex(r => {
                        rBreakIndex = r.children?.findIndex((t) => {
                            if (t.type != DomType.Break) {
                                return false;
                            }
                            if (t.break == 'lastRenderedPageBreak') {
                                return (current_page.elements.length > 2 || !this.options.ignoreLastRenderedPageBreak);
                            }
                            if (t.break === 'page') {
                                return true;
                            }
                        });
                        rBreakIndex = rBreakIndex ?? -1;
                        return rBreakIndex != -1;
                    });
                }
                if (pBreakIndex != -1) {
                    current_page.isSplit = true;
                    const exist_table = current_page.elements.some(elem => elem.type === DomType.Table);
                    if (exist_table) {
                        current_page.isSplit = false;
                    }
                    let exist_TOC = current_page.elements.some((paragraph) => {
                        return paragraph.children.some((elem) => {
                            if (elem.type === DomType.Hyperlink) {
                                return elem?.href?.includes('Toc');
                            }
                            return false;
                        });
                    });
                    if (exist_TOC) {
                        current_page.isSplit = false;
                    }
                }
                if (pBreakIndex != -1 || (sectProps && sectProps.type != SectionType.Continuous && sectProps.type != SectionType.NextColumn)) {
                    current_page.sectProps = sectProps;
                    current_page = new Page({});
                    pages.push(current_page);
                }
                if (pBreakIndex != -1) {
                    const breakRun = p.children[pBreakIndex];
                    const is_split = rBreakIndex < breakRun.children.length - 1;
                    if (pBreakIndex < p.children.length - 1 || is_split) {
                        const origin_runs = p.children;
                        const new_paragraph = {
                            ...p,
                            children: origin_runs.slice(pBreakIndex),
                        };
                        p.children = origin_runs.slice(0, pBreakIndex);
                        current_page.elements.push(new_paragraph);
                        if (is_split) {
                            const origin_elements = breakRun.children;
                            const newRun = {
                                ...breakRun,
                                children: origin_elements.slice(0, rBreakIndex),
                            };
                            p.children.push(newRun);
                            breakRun.children = origin_elements.slice(rBreakIndex);
                        }
                    }
                }
            }
            if (elem.type === DomType.Table) {
                current_page.isSplit = false;
            }
        }
        let currentSectProps = null;
        for (let i = pages.length - 1; i >= 0; i--) {
            if (pages[i].sectProps == null) {
                pages[i].sectProps = currentSectProps;
            }
            else {
                currentSectProps = pages[i].sectProps;
            }
        }
        return pages;
    }
    async renderPages(document) {
        this.processElement(document);
        let pages;
        if (this.options.breakPages) {
            pages = this.splitPage(document.children);
        }
        else {
            pages = [new Page({ sectProps: document.props, elements: document.children, })];
        }
        document.pages = pages;
        let prevProps = null;
        let origin_pages = structuredClone(pages);
        for (let i = 0; i < origin_pages.length; i++) {
            this.currentFootnoteIds = [];
            const page = origin_pages[i];
            const { sectProps } = page;
            page.sectProps = sectProps ?? document.props;
            page.isFirstPage = prevProps != page.sectProps;
            page.isLastPage = i === origin_pages.length - 1;
            page.checkingOverflow = false;
            this.currentPage = page;
            prevProps = page.sectProps;
            await this.renderPage();
        }
    }
    async renderPage() {
        const { pageId, sectProps, elements, isFirstPage, isLastPage } = this.currentPage;
        const pageElement = this.createPage(this.className, sectProps);
        this.renderStyleValues(this.document.documentPart.body.cssStyle, pageElement);
        let pages = this.document.documentPart.body.pages;
        let pageIndex = pages.findIndex((page) => page.pageId === pageId);
        if (this.options.renderHeaders) {
            await this.renderHeaderFooterRef(sectProps.headerRefs, sectProps, pageIndex, isFirstPage, pageElement);
        }
        if (this.options.renderFootnotes) {
            await this.renderNotes(this.currentFootnoteIds, this.footnoteMap, pageElement);
        }
        if (this.options.renderEndnotes && isLastPage) {
            await this.renderNotes(this.currentEndnoteIds, this.endnoteMap, pageElement);
        }
        if (this.options.renderFooters) {
            await this.renderHeaderFooterRef(sectProps.footerRefs, sectProps, pageIndex, isFirstPage, pageElement);
        }
        const contentElement = this.createPageContent(sectProps);
        if (this.options.breakPages) {
            contentElement.style.height = sectProps.contentSize.height;
        }
        else {
            contentElement.style.minHeight = sectProps.contentSize.height;
        }
        this.currentPage.contentElement = contentElement;
        pageElement.appendChild(contentElement);
        this.currentPage.checkingOverflow = true;
        let is_overflow = await this.renderElements(elements, contentElement);
        if (is_overflow === Overflow.FALSE) {
            this.currentPage.isSplit = true;
            pages[pageIndex] = this.currentPage;
        }
        this.currentPage.checkingOverflow = false;
    }
    createPage(className, props) {
        const oPage = createElement('section', { className });
        if (props) {
            oPage.dataset.sectionId = props.sectionId;
            if (props.pageMargins) {
                oPage.style.paddingLeft = props.pageMargins.left;
                oPage.style.paddingRight = props.pageMargins.right;
                oPage.style.paddingTop = props.pageMargins.top;
                oPage.style.paddingBottom = props.pageMargins.bottom;
            }
            if (props.pageSize) {
                if (!this.options.ignoreWidth) {
                    oPage.style.width = props.pageSize.width;
                }
                if (!this.options.ignoreHeight) {
                    oPage.style.minHeight = props.pageSize.height;
                }
            }
        }
        this.wrapper.appendChild(oPage);
        return oPage;
    }
    createPageContent(props) {
        const oArticle = createElement('article');
        const { count, space, separator } = props?.columns;
        if (count > 1) {
            oArticle.style.columnCount = `${count}`;
            oArticle.style.columnGap = space;
        }
        if (separator) {
            oArticle.style.columnRule = '1px solid black';
        }
        return oArticle;
    }
    async renderHeaderFooterRef(refs, props, pageIndex, isFirstPage, parent) {
        if (!refs)
            return;
        let ref;
        if (props.titlePage && isFirstPage) {
            ref = refs.find(x => x.type == "first");
        }
        else if (pageIndex % 2 == 1) {
            ref = refs.find(x => x.type == "even");
        }
        else {
            ref = refs.find(x => x.type == "default");
        }
        let part = this.document.findPartByRelId(ref?.id, this.document.documentPart);
        if (part) {
            this.currentPart = part;
            if (!this.usedHederFooterParts.includes(part.path)) {
                this.processElement(part.rootElement);
                this.usedHederFooterParts.push(part.path);
            }
            switch (part.rootElement.type) {
                case DomType.Header:
                    part.rootElement.cssStyle = {
                        left: props.pageMargins?.left,
                        width: props.contentSize?.width,
                        height: props.pageMargins?.top,
                    };
                    break;
                case DomType.Footer:
                    part.rootElement.cssStyle = {
                        left: props.pageMargins?.left,
                        width: props.contentSize?.width,
                        height: props.pageMargins?.bottom,
                    };
                    break;
                default:
                    console.warn('set header/footer style error', part.rootElement.type);
                    break;
            }
            await this.renderElements([part.rootElement], parent);
            this.currentPart = null;
        }
    }
    async renderNotes(noteIds, notesMap, parent) {
        const notes = noteIds.map(id => notesMap[id]).filter(x => x);
        if (notes.length > 0) {
            const oList = createElement('ol', null);
            await this.renderElements(notes, oList);
            parent.appendChild(oList);
        }
    }
    async renderElements(elems, parent) {
        let is_overflow = Overflow.FALSE;
        for (let i = 0; i < elems.length; i++) {
            if (elems[i].level === 1) {
                this.currentPage.breakIndex = i;
            }
            const element = (await this.renderElement(elems[i], parent));
            if (element?.dataset?.overflow === Overflow.TRUE) {
                is_overflow = Overflow.TRUE;
                break;
            }
        }
        return is_overflow;
    }
    async renderElement(elem, parent) {
        let oNode;
        switch (elem.type) {
            case DomType.Paragraph:
                oNode = await this.renderParagraph(elem, parent);
                break;
            case DomType.Run:
                oNode = await this.renderRun(elem, parent);
                break;
            case DomType.Text:
                oNode = await this.renderText(elem, parent);
                break;
            case DomType.Table:
                oNode = await this.renderTable(elem, parent);
                break;
            case DomType.Row:
                oNode = await this.renderTableRow(elem, parent);
                break;
            case DomType.Cell:
                oNode = await this.renderTableCell(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.Hyperlink:
                oNode = await this.renderHyperlink(elem, parent);
                break;
            case DomType.Drawing:
                oNode = await this.renderDrawing(elem, parent);
                break;
            case DomType.Image:
                oNode = await this.renderImage(elem, parent);
                break;
            case DomType.BookmarkStart:
                oNode = this.renderBookmarkStart(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.BookmarkEnd:
                oNode = null;
                break;
            case DomType.Tab:
                oNode = await this.renderTab(elem, parent);
                break;
            case DomType.Symbol:
                oNode = await this.renderSymbol(elem, parent);
                break;
            case DomType.Break:
                oNode = await this.renderBreak(elem, parent);
                break;
            case DomType.Inserted:
                oNode = await this.renderInserted(elem);
                if (parent) {
                    await this.appendChildren(parent, oNode);
                }
                break;
            case DomType.Deleted:
                oNode = await this.renderDeleted(elem);
                if (parent) {
                    await this.appendChildren(parent, oNode);
                }
                break;
            case DomType.DeletedText:
                oNode = await this.renderDeletedText(elem, parent);
                break;
            case DomType.NoBreakHyphen:
                oNode = createElement('wbr');
                if (parent) {
                    await this.appendChildren(parent, oNode);
                }
                break;
            case DomType.CommentRangeStart:
                oNode = this.renderCommentRangeStart(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.CommentRangeEnd:
                oNode = this.renderCommentRangeEnd(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.CommentReference:
                oNode = this.renderCommentReference(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.Footer:
                oNode = await this.renderHeaderFooter(elem, 'footer');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.Header:
                oNode = await this.renderHeaderFooter(elem, 'header');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.Footnote:
            case DomType.Endnote:
                oNode = await this.renderContainer(elem, 'li');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.FootnoteReference:
                oNode = this.renderFootnoteReference(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.EndnoteReference:
                oNode = this.renderEndnoteReference(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.VmlElement:
                oNode = await this.renderVmlElement(elem, parent);
                break;
            case DomType.VmlPicture:
                oNode = await this.renderVmlPicture(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlMath:
                oNode = await this.renderContainerNS(elem, ns.mathML, 'math', {
                    xmlns: ns.mathML,
                });
                if (parent) {
                    oNode.dataset.overflow = await this.appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlMathParagraph:
                oNode = await this.renderContainer(elem, 'span');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlFraction:
                oNode = await this.renderContainerNS(elem, ns.mathML, 'mfrac');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlBase:
                oNode = await this.renderContainerNS(elem, ns.mathML, elem.parent.type == DomType.MmlMatrixRow ? "mtd" : "mrow");
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlNumerator:
            case DomType.MmlDenominator:
            case DomType.MmlFunction:
            case DomType.MmlLimit:
            case DomType.MmlBox:
                oNode = await this.renderContainerNS(elem, ns.mathML, 'mrow');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlGroupChar:
                oNode = await this.renderMmlGroupChar(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlLimitLower:
                oNode = await this.renderContainerNS(elem, ns.mathML, 'munder');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlMatrix:
                oNode = await this.renderContainerNS(elem, ns.mathML, 'mtable');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlMatrixRow:
                oNode = await this.renderContainerNS(elem, ns.mathML, 'mtr');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlRadical:
                oNode = await this.renderMmlRadical(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlSuperscript:
                oNode = await this.renderContainerNS(elem, ns.mathML, 'msup');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlSubscript:
                oNode = await this.renderContainerNS(elem, ns.mathML, 'msub');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlDegree:
            case DomType.MmlSuperArgument:
            case DomType.MmlSubArgument:
                oNode = await this.renderContainerNS(elem, ns.mathML, 'mn');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlFunctionName:
                oNode = await this.renderContainerNS(elem, ns.mathML, 'ms');
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlDelimiter:
                oNode = await this.renderMmlDelimiter(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlRun:
                oNode = await this.renderMmlRun(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlNary:
                oNode = await this.renderMmlNary(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlPreSubSuper:
                oNode = await this.renderMmlPreSubSuper(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlBar:
                oNode = await this.renderMmlBar(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
            case DomType.MmlEquationArray:
                oNode = await this.renderMllList(elem);
                if (parent) {
                    appendChildren(parent, oNode);
                }
                break;
        }
        if (oNode && oNode?.nodeType === 1) {
            oNode.dataset.tag = elem.type;
        }
        return oNode;
    }
    isPageBreakElement(elem) {
        if (elem.type != DomType.Break) {
            return false;
        }
        if (elem.break == 'lastRenderedPageBreak') {
            return !this.options.ignoreLastRenderedPageBreak;
        }
        if (elem.break === 'page') {
            return true;
        }
    }
    async renderChildren(elem, parent) {
        return await this.renderElements(elem.children, parent);
    }
    async appendChildren(parent, children, xml_element) {
        appendChildren(parent, children);
        let is_overflow = false;
        let { pageId, sectProps, isSplit, contentElement, breakIndex, checkingOverflow, elements: origin_elements } = this.currentPage;
        if (isSplit) {
            return Overflow.UNKNOWN;
        }
        if (checkingOverflow) {
            is_overflow = checkOverflow(contentElement);
            if (is_overflow) {
                if (xml_element?.type === DomType.Row) {
                    const table = origin_elements[breakIndex];
                    const row_index = table.children.findIndex(elem => elem === xml_element);
                    const table_headers = table.children.filter((row) => row.isHeader);
                    table.children.splice(0, row_index);
                    table.children = [...table_headers, ...table.children];
                }
                let elements = origin_elements.splice(breakIndex);
                removeElements(children, parent);
                let pages = this.document.documentPart.body.pages;
                let pageIndex = pages.findIndex((page) => page.pageId === pageId);
                this.currentPage.isSplit = true;
                this.currentPage.checkingOverflow = false;
                const page = new Page({ sectProps, elements });
                pages[pageIndex] = this.currentPage;
                pages.splice(pageIndex + 1, 0, page);
                this.currentPage = page;
                await this.renderPage();
            }
        }
        return is_overflow ? Overflow.TRUE : Overflow.FALSE;
    }
    async renderContainer(elem, tagName, props) {
        const parent = createElement(tagName, props);
        await this.renderChildren(elem, parent);
        return parent;
    }
    async renderContainerNS(elem, ns, tagName, props) {
        const parent = createElementNS(ns, tagName, props);
        await this.renderChildren(elem, parent);
        return parent;
    }
    async renderParagraph(elem, parent) {
        const oParagraph = createElement('p');
        oParagraph.dataset.uuid = uuid();
        this.renderClass(elem, oParagraph);
        this.renderStyleValues(elem.cssStyle, oParagraph);
        this.renderCommonProperties(oParagraph.style, elem);
        const style = this.findStyle(elem.styleName);
        elem.tabs ?? (elem.tabs = style?.paragraphProps?.tabs);
        const numbering = elem.numbering ?? style?.paragraphProps?.numbering;
        if (numbering) {
            oParagraph.classList.add(this.numberingClass(numbering.id, numbering.level));
        }
        const is_clear = elem.children.some(run => {
            const is_exist_drawML = run?.children?.some(child => child.type === DomType.Drawing && child.props.wrapType === WrapType.TopAndBottom);
            const is_clear_break = run?.children?.some(child => child.type === DomType.Break && child?.props?.clear);
            return is_exist_drawML || is_clear_break;
        });
        if (is_clear) {
            oParagraph.classList.add('clearfix');
        }
        oParagraph.style.position = 'relative';
        if (parent) {
            const is_overflow = await this.appendChildren(parent, oParagraph);
            if (is_overflow === Overflow.TRUE) {
                oParagraph.dataset.overflow = Overflow.TRUE;
                return oParagraph;
            }
        }
        oParagraph.dataset.overflow = await this.renderChildren(elem, oParagraph);
        return oParagraph;
    }
    async renderRun(elem, parent) {
        if (elem.fieldRun) {
            return null;
        }
        const oSpan = createElement('span');
        if (elem.id) {
            oSpan.id = elem.id;
        }
        this.renderClass(elem, oSpan);
        this.renderStyleValues(elem.cssStyle, oSpan);
        if (parent) {
            const is_overflow = await this.appendChildren(parent, oSpan);
            if (is_overflow === Overflow.TRUE) {
                oSpan.dataset.overflow = Overflow.TRUE;
                return oSpan;
            }
        }
        if (elem.verticalAlign) {
            const wrapper = createElement(elem.verticalAlign);
            oSpan.dataset.overflow = await this.renderChildren(elem, wrapper);
            oSpan.dataset.overflow = await this.appendChildren(oSpan, wrapper);
        }
        else {
            oSpan.dataset.overflow = await this.renderChildren(elem, oSpan);
        }
        return oSpan;
    }
    async renderText(elem, parent) {
        const oText = document.createTextNode(elem.text);
        if (parent) {
            appendChildren(parent, oText);
        }
        return oText;
    }
    async renderTable(elem, parent) {
        const oTable = createElement('table');
        oTable.dataset.uuid = uuid();
        this.tableCellPositions.push(this.currentCellPosition);
        this.tableVerticalMerges.push(this.currentVerticalMerge);
        this.currentVerticalMerge = {};
        this.currentCellPosition = { col: 0, row: 0 };
        this.renderClass(elem, oTable);
        this.renderStyleValues(elem.cssStyle, oTable);
        if (parent) {
            const is_overflow = await this.appendChildren(parent, oTable);
            if (is_overflow === Overflow.TRUE) {
                oTable.dataset.overflow = Overflow.TRUE;
                return oTable;
            }
        }
        if (elem.columns) {
            await this.renderTableColumns(elem.columns, oTable);
        }
        oTable.dataset.overflow = await this.renderChildren(elem, oTable);
        this.currentVerticalMerge = this.tableVerticalMerges.pop();
        this.currentCellPosition = this.tableCellPositions.pop();
        return oTable;
    }
    async renderTableColumns(columns, parent) {
        const oColGroup = createElement('colgroup');
        if (parent) {
            appendChildren(parent, oColGroup);
        }
        for (const col of columns) {
            const oCol = createElement('col');
            if (col.width) {
                oCol.style.width = col.width;
            }
            appendChildren(oColGroup, oCol);
        }
        return oColGroup;
    }
    async renderTableRow(elem, parent) {
        const oTableRow = createElement('tr');
        this.currentCellPosition.col = 0;
        this.renderClass(elem, oTableRow);
        this.renderStyleValues(elem.cssStyle, oTableRow);
        this.currentCellPosition.row++;
        await this.renderChildren(elem, oTableRow);
        if (parent) {
            oTableRow.dataset.overflow = await this.appendChildren(parent, oTableRow, elem);
        }
        return oTableRow;
    }
    async renderTableCell(elem) {
        const oTableCell = createElement('td');
        const key = this.currentCellPosition.col;
        if (elem.verticalMerge) {
            if (elem.verticalMerge == 'restart') {
                this.currentVerticalMerge[key] = oTableCell;
                oTableCell.rowSpan = 1;
            }
            else if (this.currentVerticalMerge[key]) {
                this.currentVerticalMerge[key].rowSpan += 1;
                oTableCell.style.display = 'none';
            }
        }
        else {
            this.currentVerticalMerge[key] = null;
        }
        this.renderClass(elem, oTableCell);
        this.renderStyleValues(elem.cssStyle, oTableCell);
        if (elem.span) {
            oTableCell.colSpan = elem.span;
        }
        this.currentCellPosition.col += oTableCell.colSpan;
        await this.renderChildren(elem, oTableCell);
        return oTableCell;
    }
    async renderHyperlink(elem, parent) {
        const oAnchor = createElement('a');
        this.renderStyleValues(elem.cssStyle, oAnchor);
        if (parent) {
            const is_overflow = await this.appendChildren(parent, oAnchor);
            if (is_overflow === Overflow.TRUE) {
                oAnchor.dataset.overflow = Overflow.TRUE;
                return oAnchor;
            }
        }
        if (elem.href) {
            oAnchor.href = elem.href;
        }
        else if (elem.id) {
            const rel = this.document.documentPart.rels.find(it => it.id == elem.id && it.targetMode === 'External');
            oAnchor.href = rel?.target;
        }
        oAnchor.dataset.overflow = await this.renderChildren(elem, oAnchor);
        return oAnchor;
    }
    async renderDrawing(elem, parent) {
        const oDrawing = createElement('span');
        oDrawing.style.textIndent = '0px';
        oDrawing.dataset.wrap = elem?.props.wrapType;
        this.renderStyleValues(elem.cssStyle, oDrawing);
        if (parent) {
            const is_overflow = await this.appendChildren(parent, oDrawing);
            if (is_overflow === Overflow.TRUE) {
                oDrawing.dataset.overflow = Overflow.TRUE;
                return oDrawing;
            }
        }
        oDrawing.dataset.overflow = await this.renderChildren(elem, oDrawing);
        return oDrawing;
    }
    async renderImage(elem, parent) {
        const { is_clip, is_transform } = elem.props;
        const oImage = new Image();
        this.renderStyleValues(elem.cssStyle, oImage);
        const source = await this.document.loadDocumentImage(elem.src, this.currentPart);
        if (is_clip || is_transform) {
            oImage.src = await this.transformImage(elem, source);
        }
        else {
            oImage.src = source;
        }
        if (parent) {
            oImage.dataset.overflow = await this.appendChildren(parent, oImage);
        }
        return oImage;
    }
    renderKonva() {
        const oContainer = createElement('div');
        oContainer.id = 'konva-container';
        document.body.appendChild(oContainer);
        this.konva_stage = new Konva.Stage({ container: 'konva-container' });
        this.konva_layer = new Konva.Layer({ listening: false });
        this.konva_stage.add(this.konva_layer);
    }
    async transformImage(elem, source) {
        const { width, height, is_clip, clip, is_transform, transform } = elem.props;
        const img = new Image();
        img.src = source;
        await img.decode();
        const { naturalWidth, naturalHeight } = img;
        this.konva_stage.visible(true);
        this.konva_stage.width(naturalWidth);
        this.konva_stage.height(naturalHeight);
        this.konva_layer.removeChildren();
        const group = new Konva.Group();
        const image = new Konva.Image({
            image: img,
            x: naturalWidth / 2,
            y: naturalHeight / 2,
            width: naturalWidth,
            height: naturalHeight,
            offset: {
                x: naturalWidth / 2,
                y: naturalHeight / 2,
            },
        });
        if (is_clip) {
            const { left, right, top, bottom } = clip.path;
            const x = naturalWidth * left;
            const y = naturalHeight * top;
            const width = naturalWidth * (1 - left - right);
            const height = naturalHeight * (1 - top - bottom);
            image.crop({ x, y, width, height });
            image.size({ width, height });
        }
        if (is_transform) {
            for (const key in transform) {
                switch (key) {
                    case 'scaleX':
                        image.scaleX(transform[key]);
                        break;
                    case 'scaleY':
                        image.scaleY(transform[key]);
                        break;
                    case 'rotate':
                        image.rotation(transform[key]);
                        break;
                }
            }
        }
        group.add(image);
        this.konva_layer.add(group);
        let result;
        if (this.options.useBase64URL) {
            result = group.toDataURL();
        }
        else {
            const blob = (await group.toBlob());
            result = URL.createObjectURL(blob);
        }
        this.konva_stage.visible(false);
        return result;
    }
    renderBookmarkStart(elem) {
        const oSpan = createElement('span');
        oSpan.id = elem.name;
        return oSpan;
    }
    async renderTab(elem, parent) {
        const tabSpan = createElement('span');
        tabSpan.innerHTML = '&emsp;';
        if (this.options.experimental) {
            tabSpan.className = this.tabStopClass();
            const stops = findParent(elem, DomType.Paragraph)?.tabs;
            this.currentTabs.push({ stops, span: tabSpan });
        }
        if (parent) {
            await this.appendChildren(parent, tabSpan);
        }
        return tabSpan;
    }
    async renderSymbol(elem, parent) {
        const oSpan = createElement('span');
        oSpan.style.fontFamily = elem.font;
        oSpan.innerHTML = `&#x${elem.char};`;
        if (parent) {
            await this.appendChildren(parent, oSpan);
        }
        return oSpan;
    }
    async renderBreak(elem, parent) {
        let oBr;
        switch (elem.break) {
            case 'page':
                oBr = createElement('br');
                oBr.classList.add('break', 'page');
                break;
            case 'textWrapping':
                oBr = createElement('br');
                oBr.classList.add('break', 'textWrap');
                break;
            case 'column':
                oBr = createElement('br');
                oBr.classList.add('break', 'column');
                break;
            case 'lastRenderedPageBreak':
                oBr = createElement('wbr');
                oBr.classList.add('break', 'lastRenderedPageBreak');
                break;
        }
        if (parent) {
            appendChildren(parent, oBr);
        }
        return oBr;
    }
    renderInserted(elem) {
        if (this.options.renderChanges) {
            return this.renderContainer(elem, 'ins');
        }
        return this.renderContainer(elem, 'span');
    }
    async renderDeleted(elem) {
        if (this.options.renderChanges) {
            return await this.renderContainer(elem, 'del');
        }
        return null;
    }
    async renderDeletedText(elem, parent) {
        let oDeletedText;
        if (this.options.renderEndnotes) {
            oDeletedText = document.createTextNode(elem.text);
            if (parent) {
                await this.appendChildren(parent, oDeletedText);
            }
        }
        else {
            oDeletedText = null;
        }
        return oDeletedText;
    }
    renderCommentRangeStart(commentStart) {
        if (!this.options.experimental) {
            return null;
        }
        return document.createComment(`start of comment #${commentStart.id}`);
    }
    renderCommentRangeEnd(commentEnd) {
        if (!this.options.experimental) {
            return null;
        }
        return document.createComment(`end of comment #${commentEnd.id}`);
    }
    renderCommentReference(commentRef) {
        if (!this.options.experimental) {
            return null;
        }
        const comment = this.document.commentsPart?.commentMap[commentRef.id];
        if (!comment)
            return null;
        return document.createComment(`comment #${comment.id} by ${comment.author} on ${comment.date}`);
    }
    async renderHeaderFooter(elem, tagName) {
        const oElement = createElement(tagName);
        await this.renderChildren(elem, oElement);
        this.renderStyleValues(elem.cssStyle, oElement);
        return oElement;
    }
    renderFootnoteReference(elem) {
        const oSup = createElement('sup');
        this.currentFootnoteIds.push(elem.id);
        oSup.textContent = `${this.currentFootnoteIds.length}`;
        return oSup;
    }
    renderEndnoteReference(elem) {
        const oSup = createElement('sup');
        this.currentEndnoteIds.push(elem.id);
        oSup.textContent = `${this.currentEndnoteIds.length}`;
        return oSup;
    }
    async renderVmlElement(elem, parent) {
        const oSvg = createSvgElement('svg');
        oSvg.setAttribute('style', elem.cssStyleText);
        const oChildren = await this.renderVmlChildElement(elem);
        if (elem.imageHref?.id) {
            const source = await this.document?.loadDocumentImage(elem.imageHref.id, this.currentPart);
            oChildren.setAttribute('href', source);
        }
        appendChildren(oSvg, oChildren);
        requestAnimationFrame(() => {
            const bb = oSvg.firstElementChild.getBBox();
            oSvg.setAttribute('width', `${Math.ceil(bb.x + bb.width)}`);
            oSvg.setAttribute('height', `${Math.ceil(bb.y + bb.height)}`);
        });
        if (parent) {
            oSvg.dataset.overflow = await this.appendChildren(parent, oSvg);
        }
        return oSvg;
    }
    async renderVmlPicture(elem) {
        const oPictureContainer = createElement('span');
        await this.renderChildren(elem, oPictureContainer);
        return oPictureContainer;
    }
    async renderVmlChildElement(elem) {
        const oVMLElement = createSvgElement(elem.tagName);
        Object.entries(elem.attrs).forEach(([k, v]) => oVMLElement.setAttribute(k, v));
        for (const child of elem.children) {
            if (child.type == DomType.VmlElement) {
                const oChild = await this.renderVmlChildElement(child);
                appendChildren(oVMLElement, oChild);
            }
            else {
                await this.renderElement(child, oVMLElement);
            }
        }
        return oVMLElement;
    }
    async renderMmlRadical(elem) {
        const base = elem.children.find(el => el.type == DomType.MmlBase);
        let oParent;
        if (elem.props?.hideDegree) {
            oParent = createElementNS(ns.mathML, 'msqrt', null);
            await this.renderElements([base], oParent);
            return oParent;
        }
        const degree = elem.children.find(el => el.type == DomType.MmlDegree);
        oParent = createElementNS(ns.mathML, 'mroot', null);
        await this.renderElements([base, degree], oParent);
        return oParent;
    }
    async renderMmlDelimiter(elem) {
        const oMrow = createElementNS(ns.mathML, 'mrow', null);
        let oBegin = createElementNS(ns.mathML, "mo", null, [elem.props.beginChar ?? '(']);
        appendChildren(oMrow, oBegin);
        await this.renderElements(elem.children, oMrow);
        let oEnd = createElementNS(ns.mathML, "mo", null, [elem.props.endChar ?? ')']);
        appendChildren(oMrow, oEnd);
        return oMrow;
    }
    async renderMmlNary(elem) {
        const children = [];
        const grouped = keyBy(elem.children, x => x.type);
        const sup = grouped[DomType.MmlSuperArgument];
        const sub = grouped[DomType.MmlSubArgument];
        let supElem = sup ? createElementNS(ns.mathML, "mo", null, asArray(await this.renderElement(sup))) : null;
        let subElem = sub ? createElementNS(ns.mathML, "mo", null, asArray(await this.renderElement(sub))) : null;
        let charElem = createElementNS(ns.mathML, "mo", null, [elem.props?.char ?? '\u222B']);
        if (supElem || subElem) {
            children.push(createElementNS(ns.mathML, "munderover", null, [charElem, subElem, supElem]));
        }
        else if (supElem) {
            children.push(createElementNS(ns.mathML, "mover", null, [charElem, supElem]));
        }
        else if (subElem) {
            children.push(createElementNS(ns.mathML, "munder", null, [charElem, subElem]));
        }
        else {
            children.push(charElem);
        }
        const oMrow = createElementNS(ns.mathML, 'mrow', null);
        appendChildren(oMrow, children);
        await this.renderElements(grouped[DomType.MmlBase].children, oMrow);
        return oMrow;
    }
    async renderMmlPreSubSuper(elem) {
        const children = [];
        const grouped = keyBy(elem.children, x => x.type);
        const sup = grouped[DomType.MmlSuperArgument];
        const sub = grouped[DomType.MmlSubArgument];
        let supElem = sup ? createElementNS(ns.mathML, "mo", null, asArray(await this.renderElement(sup))) : null;
        let subElem = sub ? createElementNS(ns.mathML, "mo", null, asArray(await this.renderElement(sub))) : null;
        let stubElem = createElementNS(ns.mathML, "mo", null);
        children.push(createElementNS(ns.mathML, "msubsup", null, [stubElem, subElem, supElem]));
        const oMrow = createElementNS(ns.mathML, 'mrow', null);
        appendChildren(oMrow, children);
        await this.renderElements(grouped[DomType.MmlBase].children, oMrow);
        return oMrow;
    }
    async renderMmlGroupChar(elem) {
        let tagName = elem.props.verticalJustification === "bot" ? "mover" : "munder";
        let oGroupChar = await this.renderContainerNS(elem, ns.mathML, tagName);
        if (elem.props.char) {
            const oMo = createElementNS(ns.mathML, 'mo', null, [elem.props.char]);
            appendChildren(oGroupChar, oMo);
        }
        return oGroupChar;
    }
    async renderMmlBar(elem) {
        let oMrow = await this.renderContainerNS(elem, ns.mathML, "mrow");
        switch (elem.props.position) {
            case 'top':
                oMrow.style.textDecoration = 'overline';
                break;
            case 'bottom':
                oMrow.style.textDecoration = 'underline';
                break;
        }
        return oMrow;
    }
    async renderMmlRun(elem) {
        const oMs = createElementNS(ns.mathML, 'ms');
        this.renderClass(elem, oMs);
        this.renderStyleValues(elem.cssStyle, oMs);
        await this.renderChildren(elem, oMs);
        return oMs;
    }
    async renderMllList(elem) {
        const oMtable = createElementNS(ns.mathML, 'mtable');
        this.renderClass(elem, oMtable);
        this.renderStyleValues(elem.cssStyle, oMtable);
        for (const child of elem.children) {
            const oChild = await this.renderElement(child);
            const oMtd = createElementNS(ns.mathML, 'mtd', null, [oChild]);
            const oMtr = createElementNS(ns.mathML, 'mtr', null, [oMtd]);
            appendChildren(oMtable, oMtr);
        }
        return oMtable;
    }
    renderStyleValues(style, output) {
        for (const k in style) {
            if (k.startsWith('$')) {
                output.setAttribute(k.slice(1), style[k]);
            }
            else {
                output.style[k] = style[k];
            }
        }
    }
    renderRunProperties(style, props) {
        this.renderCommonProperties(style, props);
    }
    renderCommonProperties(style, props) {
        if (props == null)
            return;
        if (props.color) {
            style['color'] = props.color;
        }
        if (props.fontSize) {
            style['font-size'] = props.fontSize;
        }
    }
    renderClass(input, output) {
        if (input.className) {
            output.className = input.className;
        }
        if (input.styleName) {
            output.classList.add(this.processStyleName(input.styleName));
        }
    }
    findStyle(styleName) {
        return styleName && this.styleMap?.[styleName];
    }
    tabStopClass() {
        return `${this.className}-tab-stop`;
    }
    refreshTabStops() {
        if (!this.options.experimental) {
            return;
        }
        clearTimeout(this.tabsTimeout);
        this.tabsTimeout = setTimeout(() => {
            const pixelToPoint = computePixelToPoint();
            for (const tab of this.currentTabs) {
                updateTabStop(tab.span, tab.stops, this.defaultTabSize, pixelToPoint);
            }
        }, 500);
    }
}
function createElement(tagName, props) {
    return createElementNS(null, tagName, props);
}
function createSvgElement(tagName, props) {
    return createElementNS(ns.svg, tagName, props);
}
function createElementNS(ns, tagName, props, children) {
    let oParent;
    switch (ns) {
        case "http://www.w3.org/1998/Math/MathML":
            oParent = document.createElementNS(ns, tagName);
            break;
        case 'http://www.w3.org/2000/svg':
            oParent = document.createElementNS(ns, tagName);
            break;
        case 'http://www.w3.org/1999/xhtml':
            oParent = document.createElement(tagName);
            break;
        default:
            oParent = document.createElement(tagName);
    }
    if (props) {
        Object.assign(oParent, props);
    }
    if (children) {
        appendChildren(oParent, children);
    }
    return oParent;
}
function removeAllElements(elem) {
    elem.innerHTML = '';
}
function appendChildren(parent, children) {
    if (Array.isArray(children)) {
        parent.append(...children);
    }
    else if (children) {
        if (isString(children)) {
            parent.append(children);
        }
        else {
            parent.appendChild(children);
        }
    }
}
function checkOverflow(el) {
    const current_overflow = getComputedStyle(el).overflow;
    if (!current_overflow || current_overflow === 'visible') {
        el.style.overflow = 'hidden';
    }
    const is_overflow = el.clientHeight < el.scrollHeight;
    el.style.overflow = current_overflow;
    return is_overflow;
}
function removeElements(target, parent) {
    if (Array.isArray(target)) {
        target.forEach(elem => {
            if (elem instanceof Element) {
                elem.remove();
            }
            else {
                if (parent) {
                    parent.removeChild(elem);
                }
            }
        });
    }
    else {
        if (target instanceof Element) {
            target.remove();
        }
        else {
            if (target) {
                parent.removeChild(target);
            }
        }
    }
}
function createStyleElement(cssText) {
    return createElement('style', { innerHTML: cssText });
}
function appendComment(elem, comment) {
    elem.appendChild(document.createComment(comment));
}
function findParent(elem, type) {
    let parent = elem.parent;
    while (parent != null && parent.type != type) {
        parent = parent.parent;
    }
    return parent;
}

const defaultOptions = {
    className: "docx",
    inWrapper: true,
    ignoreHeight: false,
    ignoreWidth: false,
    ignoreFonts: false,
    ignoreTableWrap: true,
    ignoreImageWrap: false,
    ignoreLastRenderedPageBreak: true,
    breakPages: true,
    trimXmlDeclaration: true,
    useBase64URL: false,
    renderHeaders: true,
    renderFooters: true,
    renderFootnotes: true,
    renderEndnotes: true,
    renderChanges: false,
    experimental: false,
    debug: false,
};
function parseAsync(data, userOptions = null) {
    const ops = { ...defaultOptions, ...userOptions };
    return WordDocument.load(data, new DocumentParser(ops), ops);
}
async function renderAsync(data, bodyContainer, styleContainer = null, userOptions = null) {
    const ops = { ...defaultOptions, ...userOptions };
    const renderer = new HtmlRenderer();
    const doc = await WordDocument.load(data, new DocumentParser(ops), ops);
    await renderer.render(doc, bodyContainer, styleContainer, ops);
    return doc;
}
async function renderSync(data, bodyContainer, styleContainer = null, userOptions = null) {
    const ops = { ...defaultOptions, ...userOptions };
    const renderer = new HtmlRendererSync();
    const doc = await WordDocument.load(data, new DocumentParser(ops), ops);
    await renderer.render(doc, bodyContainer, styleContainer, ops);
    return doc;
}

export { defaultOptions, parseAsync, renderAsync, renderSync };
//# sourceMappingURL=docx-preview.mjs.map
