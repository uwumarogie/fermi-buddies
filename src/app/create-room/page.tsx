"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Users, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/util/hooks/use-toast";
const generateRoomId = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
};
export default function CreateRoom() {
  const [roomName, setRoomName] = useState("");
  const [description, setDescription] = useState("");
  const [maxPlayers, setMaxPlayers] = useState("4");
  const [roomCreated, setRoomCreated] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [roomLink, setRoomLink] = useState("");
  const { toast } = useToast();

  const handleCreateRoom = () => {
    if (!roomName.trim()) {
      toast({
        title: "Room name required",
        description: "Please enter a name for your room.",
        variant: "destructive",
      });
      return;
    }

    const newRoomId = generateRoomId();
    const link = `${window.location.origin}/room/${newRoomId}`;

    setRoomId(newRoomId);
    setRoomLink(link);
    setRoomCreated(true);

    toast({
      title: "Room created successfully!",
      description: "Share the link with your friends to start playing.",
    });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(roomLink);
      toast({
        title: "Link copied!",
        description: "Room link has been copied to clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the link manually.",
        variant: "destructive",
      });
    }
  };

  const shareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Join my Fermi problem room: ${roomName}`,
          text: `Come solve Fermi problems with me!`,
          url: roomLink,
        });
      } catch (err) {
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  if (roomCreated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Room Created!</CardTitle>
            <CardDescription>
              Share this link with your friends to invite them
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="roomId" className="text-sm font-medium">
                Room ID
              </Label>
              <div className="flex mt-1">
                <Input
                  id="roomId"
                  value={roomId}
                  readOnly
                  className="font-mono text-lg text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-2"
                  onClick={() => navigator.clipboard.writeText(roomId)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <Label htmlFor="roomLink" className="text-sm font-medium">
                Room Link
              </Label>
              <div className="flex mt-1">
                <Input
                  id="roomLink"
                  value={roomLink}
                  readOnly
                  className="text-sm"
                />
                <Button
                  variant="outline"
                  size="icon"
                  className="ml-2"
                  onClick={copyToClipboard}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-2 pt-4">
              <Button onClick={shareLink} className="flex-1">
                <Share2 className="w-4 h-4 mr-2" />
                Share Link
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <Link href={`/room/${roomId}`}>Join Room</Link>
              </Button>
            </div>

            <Button asChild variant="ghost" className="w-full">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Create a Room</CardTitle>
          <CardDescription>
            Set up a room to solve Fermi problems with friends
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="roomName">Room Name *</Label>
            <Input
              id="roomName"
              placeholder="e.g., Physics Fun Night"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="description">Description (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Tell your friends what this room is about..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="resize-none"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="maxPlayers">Max Players</Label>
            <Input
              id="maxPlayers"
              type="number"
              min="2"
              max="10"
              value={maxPlayers}
              onChange={(e) => setMaxPlayers(e.target.value)}
            />
          </div>

          <Button
            onClick={handleCreateRoom}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
          >
            Create Room
          </Button>

          <Button asChild variant="ghost" className="w-full">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
