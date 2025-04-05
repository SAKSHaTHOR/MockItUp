import { cn } from "@/lib/utils";
import Image from "next/image";

enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
}

interface AgentProps {
    userName: string;
}

const Agent = ({ userName }: AgentProps) => {
    const currentCallStatus = CallStatus.FINISHED; // Renamed to avoid shadowing the enum
    const isSpeaking = true;

    const messages = [
        'What is your name?',
        'My name is Rutz,nice to meet you!',

    ]
    const LastMessage = messages[messages.length - 1];

    return (
        <>
            <div className="call-view">
                <div className="card-interviewer">
                    <div className="avatar">
                        <Image
                            src="/ai-avatar.png"
                            alt="vapi"
                            width={65}
                            height={54}
                            className="object-cover"
                        />
                        {isSpeaking && <span className="animate-speak" />}
                    </div>

                    <h3>AI Interviewer</h3>
                </div>

                <div className="card-border">
                    <div className="card-content">
                        <Image
                            src="/user-avatar.png"
                            alt="user avatar"
                            width={120}
                            height={120}
                            className="rounded-full object-cover"
                        />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>
                {messages.length > 0 && (
                    <div className="transcript-border">
                            <div className="transcript">
                                <p key={LastMessage} className={cn('transition-opacity duration-500 opacity-0','animate-fadeIn opacity-100')}> 
                                    {LastMessage}
                                </p>
                            </div>
                    </div>
                    )}


            <div className="w-full flex justify-center">
                {currentCallStatus !== CallStatus.ACTIVE ? (
                    <button className="relative btn-call">
                        <span className={cn('absolute aimate-ping rounded-full opacity-75',currentCallStatus !== 'CONNECTING' && 'hidden')}/>
                        <span>
                        {currentCallStatus === CallStatus.INACTIVE ||
                            currentCallStatus === CallStatus.FINISHED
                                ? "Call"
                                : "Connecting..."}
                        </span>
                    </button>
                ) : (
                    <button className="btn-disconnect">END</button>
                )}
            </div>
        </>
    );
};

export default Agent;